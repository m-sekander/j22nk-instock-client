import "./AddWarehouse.scss";
import arrowBack from "../../assets/images/icons/arrow_back-24px.svg";

function AddWarehouse() {
    return (
        <main className="add-warehouse">
            <div className="add-warehouse__title-container">
                <a href="#" className="add-warehouse__link">
                    <img className="add-warehouse__icon" src={arrowBack} alt="back icon"></img>
                </a>
                <h1 className="add-warehouse__title">Add New Warehouse</h1>
            </div>
            <form>
                <div className="add-warehouse__input-container">
                    <h2 className="add-warehouse__sub-title">Warehouse Details</h2>
                    <label className="add-warehouse__label">
                        Warehouse Name
                        <input className="add-warehouse__input" placeholder="Warehouse Name" name="warehouseName"></input>
                    </label>
                    <label className="add-warehouse__label">
                        Street Address
                        <input className="add-warehouse__input" placeholder="Street Address" name="address"></input>
                    </label>
                    <label className="add-warehouse__label">
                        City
                        <input className="add-warehouse__input" placeholder="City" name="city"></input>
                    </label>
                    <label className="add-warehouse__label">
                        Country
                        <input className="add-warehouse__input" placeholder="Country" name="country"></input>
                    </label>
                </div>
                <div className="add-warehouse__input-container">
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
            </form>
        </main>
    );
}

export default AddWarehouse;