import "./AddWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import WarehouseInputs from "../WarehouseInputs/WarehouseInputs";
import CTA from "../Button/CTA";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function AddWarehouse() {
    // Set up error messages array of 8 and fill initial values to ""
    const [errorMessages, setErrorMessages] = useState(new Array(8).fill(""));
    const [isSuccessful, setIsSuccessful] = useState(false);

    const navigate = useNavigate();

    // Arrays to pass down to WarehouseInputs components
    const warehouseInputFields = ["Warehouse Name", "Street Address", "City", "Country"];
    const contactInputFields = ["Contact Name", "Position", "Phone Number", "Email"];
    const warehouseErrorMessages = errorMessages.slice(0, 4);

    const warehouseInputFieldNames = ["warehouseName", "address", "city", "country"];
    const contactInputFieldNames = ["contactName", "position", "phone", "email"];
    const contactErrorMessages = errorMessages.slice(4);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newWarehouse = {
            name: event.target.warehouseName.value,
            address: event.target.address.value,
            city: event.target.city.value,
            country: event.target.country.value,
            contact: {
                name: event.target.contactName.value,
                position: event.target.position.value,
                phone: event.target.phone.value,
                email: event.target.email.value
            }
        }
        
        axios.post("http://localhost:8080/warehouses", newWarehouse)
            .then(() => {
                setIsSuccessful(true);
                setTimeout(() => navigate("/warehouses"), 1500);
    
                // Clear all fields after submitting
                warehouseInputFieldNames.forEach((fieldName) => {
                    event.target[fieldName].value = "";
                })
                contactInputFieldNames.forEach((fieldName) => {
                    event.target[fieldName].value = "";
                })
                setErrorMessages(new Array(8).fill(""));
            })
            .catch((error) => {
                setErrorMessages(error.response.data);
            })
    }

    return (
        <>
            <div className="add-warehouse__title-container">
                <Link to="/warehouses" className="add-warehouse__link">
                    <img className="add-warehouse__icon" src={arrowBack} alt="back icon"></img>
                </Link>
                <h1 className="add-warehouse__title">Add New Warehouse</h1>
            </div>
            <form className="add-warehouse__form" onSubmit={handleSubmit}>
                <div className="add-warehouse__inputs-container">
                    <WarehouseInputs 
                        title="Warehouse Details" 
                        inputFields={warehouseInputFields} 
                        fieldNames={warehouseInputFieldNames}
                        errorMessages={warehouseErrorMessages}/>
                    <WarehouseInputs 
                        title="Contact Details" 
                        inputFields={contactInputFields} 
                        fieldNames={contactInputFieldNames}
                        errorMessages={contactErrorMessages}
                        className={"warehouse-inputs--with-divider"}/>
                </div>
                {isSuccessful 
                    && <div className="add-warehouse__modal">
                            Warehouse is successfully added.
                        </div>
                }
                <div className="add-warehouse__button-container">
                    <CTA text="Cancel" link="/warehouses" type="secondary" />
                    <CTA text="+ Add Warehouse" isButton={true} />
                </div>
            </form>
        </>
    );
}

export default AddWarehouse;