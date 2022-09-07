import "./WarehouseList.scss"

function WarehouseList() {
    return (
        <section className="warehouse-list">
            <div className="warehouse-list__header">
                <h2 className="warehouse-list__title">Warehouses</h2>
                <form className="warehouse-list__form">
                    <input type="text" placeholder="Search"></input>
                    <button>+ Add New Warehouse</button>
                </form>
            </div>
            {/* map out warehouses */}
        </section>
    );
}

export default WarehouseList;