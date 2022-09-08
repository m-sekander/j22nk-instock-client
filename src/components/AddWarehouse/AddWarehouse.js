import "./AddWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import WarehouseInputs from "../WarehouseInputs/WarehouseInputs";
import CTA from "../Button/CTA";
import {Link} from "react-router-dom";
import axios from "axios";

function AddWarehouse() {
    const warehouseInputFields = ["Warehouse Name", "Street Address", "City", "Country"];
    const contactInputFields = ["Contact Name", "Position", "Phone Number", "Email"];

    const warehouseInputFieldNames = ["warehouseName", "address", "city", "country"];
    const contactInputFieldNames = ["contactName", "position", "phone", "email"];

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
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
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
                    <WarehouseInputs title="Warehouse Details" inputFields={warehouseInputFields} fieldNames={warehouseInputFieldNames}/>
                    <WarehouseInputs title="Contact Details" inputFields={contactInputFields} fieldNames={contactInputFieldNames}/>
                </div>
                <div className="add-warehouse__button-container">
                    <CTA text="Cancel" link="/warehouses" type="secondary" />
                    <CTA text="+ Add Warehouse" isButton={true} />
                </div>
            </form>
        </>
    );
}

export default AddWarehouse;