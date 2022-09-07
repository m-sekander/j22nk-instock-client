import "./WarehouseInputs.scss";

function WarehouseInputs() {
    return (
        <div className="warehouse-inputs">
            <h2>Warehouse Details</h2>
            <label className="warehouse-inputs__label">
                Warehouse Name
                <input className="warehouse-inputs__input" placeholder="Warehouse Name" name="warehouseName"></input>
            </label>
            <label className="warehouse-inputs__label">
                Street Address
                <input className="warehouse-inputs__input" placeholder="Street Address" name="address"></input>
            </label>
            <label className="warehouse-inputs__label">
                City
                <input className="warehouse-inputs__input" placeholder="City" name="city"></input>
            </label>
            <label className="warehouse-inputs__label">
                Country
                <input className="warehouse-inputs__input" placeholder="Country" name="country"></input>
            </label>
        </div>
    );
}

export default WarehouseInputs;