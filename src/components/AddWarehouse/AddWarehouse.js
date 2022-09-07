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
        </main>
    );
}

export default AddWarehouse;