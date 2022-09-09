import "./EditWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import WarehouseInputs from "../WarehouseInputs/WarehouseInputs";
import CTA from "../CTA/CTA";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

function EditWarehouse() {
    // Set up error messages array of 8 and fill initial values to ""
    const [warehouseInfo, setWarehouseInfo] = useState(null);
    const [errorMessages, setErrorMessages] = useState(new Array(8).fill(""));
    const [isSuccessful, setIsSuccessful] = useState(false);

    const {warehouseId} = useParams();
    const navigate = useNavigate();

    // Arrays to pass down to WarehouseInputs components
    const warehouseInputFields = ["Warehouse Name", "Street Address", "City", "Country"];
    const contactInputFields = ["Contact Name", "Position", "Phone Number", "Email"];
    const warehouseErrorMessages = errorMessages.slice(0, 4);

    const warehouseInputFieldNames = ["warehouseName", "address", "city", "country"];
    const contactInputFieldNames = ["contactName", "position", "phone", "email"];
    const contactErrorMessages = errorMessages.slice(4);

    // Arrays of warehouse info received through axios call
    // Convert object into array if warehouseInfo has values
    const warehouseDetailArray = warehouseInfo ? Object.values(warehouseInfo) : [];
    // Pop out last elemtent in the array (contact object), convert that into array
    const contactDetailArray = warehouseDetailArray.length > 0 ? Object.values(warehouseDetailArray.pop()) : [];
    // Remove first elemtent (ID which we don't need)
    warehouseDetailArray.shift();

    const handleSubmit = (event) => {
        event.preventDefault();
        const editedWarehouse = {
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

        axios.put("http://localhost:8080/warehouses/" + warehouseId, editedWarehouse)
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

    useEffect(()=>{
        axios.get("http://localhost:8080/warehouses/" + warehouseId)
            .then((response) => {
                setWarehouseInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div className="edit-warehouse__title-container">
                <Link to="/warehouses" className="edit-warehouse__link">
                    <img className="edit-warehouse__icon" src={arrowBack} alt="back icon"></img>
                </Link>
                <h1 className="edit-warehouse__title">Edit Warehouse</h1>
            </div>
            <form className="edit-warehouse__form" onSubmit={handleSubmit}>
                <div className="edit-warehouse__inputs-container">
                    <WarehouseInputs 
                        title="Warehouse Details" 
                        inputFields={warehouseInputFields} 
                        fieldNames={warehouseInputFieldNames}
                        errorMessages={warehouseErrorMessages}
                        fieldValues={warehouseDetailArray}/>
                    <WarehouseInputs 
                        title="Contact Details" 
                        inputFields={contactInputFields} 
                        fieldNames={contactInputFieldNames}
                        errorMessages={contactErrorMessages}
                        fieldValues={contactDetailArray}
                        className={"warehouse-inputs--with-divider"}/>
                </div>
                {isSuccessful 
                    && <div className="edit-warehouse__modal">
                            Informaition is saved successfully.
                        </div>
                }
                <div className="edit-warehouse__button-container">
                    <CTA text="Cancel" link="/warehouses" type="secondary" />
                    <CTA text="Save" isButton={true} />
                </div>
            </form>
        </>
    );
}

export default EditWarehouse;