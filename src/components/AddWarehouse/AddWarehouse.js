import "./AddWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";
import WarehouseInputs from "../WarehouseInputs/WarehouseInputs";

function AddWarehouse() {
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
                    <WarehouseInputs />
                    <div className="add-warehouse__input-container add-warehouse__input-container--with-divider">
                        <h2 className="add-warehouse__sub-title">Contact Details</h2>
                        <label className="add-warehouse__label">
                            Contact Name
                            <input className="add-warehouse__input" placeholder="Contact Name" name="contactName"></input>
                        </label>
                        <label className="add-warehouse__label">
                            Position
                            <input className="add-warehouse__input" placeholder="Position" name="position"></input>
                        </label>
                        <label className="add-warehouse__label">
                            Phone Number
                            <input className="add-warehouse__input" placeholder="Phone Number" name="phone"></input>
                        </label>
                        <label className="add-warehouse__label">
                            Email
                            <input className="add-warehouse__input" placeholder="Email" name="email"></input>
                        </label>
                    </div>
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