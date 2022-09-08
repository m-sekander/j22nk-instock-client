import "./AddWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import WarehouseInputs from "../WarehouseInputs/WarehouseInputs";
import CTA from "../Button/CTA";
import {Link} from "react-router-dom";

function AddWarehouse() {
    const warehouseInputFields = ["Warehouse Name", "Street Address", "City", "Country"];
    const contactInputFields = ["Contact Name", "Position", "Phone Number", "Email"];

    const warehouseInputFieldNames = ["warehouseName", "address", "city", "country"];
    const contactInputFieldNames = ["contactName", "position", "phoneNumber", "email"];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
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