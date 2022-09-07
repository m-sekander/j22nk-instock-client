import "./AddWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import WarehouseInputs from "../WarehouseInputs/WarehouseInputs";

function AddWarehouse() {
    const warehouseInputFields = ["Warehouse Name", "Street Address", "City", "Country"];
    const contactInputFields = ["Contact Name", "Position", "Phone Number", "Email"];

    return (
        <>
            <div className="add-warehouse__title-container">
                <a href="#" className="add-warehouse__link">
                    <img className="add-warehouse__icon" src={arrowBack} alt="back icon"></img>
                </a>
                <h1 className="add-warehouse__title">Add New Warehouse</h1>
            </div>
            <form className="add-warehouse__form">
                <div className="add-warehouse__inputs-container">
                    <WarehouseInputs title="Warehouse Details" inputFields={warehouseInputFields} />
                    <WarehouseInputs title="Contact Details" inputFields={contactInputFields} />
                </div>
                <div className="add-warehouse__button-container">
                    <button className="add-warehouse__button">Cancel</button>
                    <button className="add-warehouse__button add-warehouse__button--cta">+ Add Warehouse</button>
                </div>
            </form>
        </>
    );
}

export default AddWarehouse;