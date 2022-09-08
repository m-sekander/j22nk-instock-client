import "./AddWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import WarehouseInputs from "../WarehouseInputs/WarehouseInputs";
import CTA from "../CTA/CTA";
import {Link} from "react-router-dom";

function AddWarehouse() {
    const warehouseInputFields = ["Warehouse Name", "Street Address", "City", "Country"];
    const contactInputFields = ["Contact Name", "Position", "Phone Number", "Email"];

    return (
        <>
            <div className="add-warehouse__title-container">
                <Link to="/warehouses" className="add-warehouse__link">
                    <img className="add-warehouse__icon" src={arrowBack} alt="back icon"></img>
                </Link>
                <h1 className="add-warehouse__title">Add New Warehouse</h1>
            </div>
            <form className="add-warehouse__form">
                <div className="add-warehouse__inputs-container">
                    <WarehouseInputs title="Warehouse Details" inputFields={warehouseInputFields} />
                    <WarehouseInputs title="Contact Details" inputFields={contactInputFields} />
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