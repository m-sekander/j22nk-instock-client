import "./WarehouseList.scss"
import axios from 'axios';

function WarehouseList() {
    return (
        <section className="warehouse-list">
            <div className="warehouse-list__header">
                <h1 className="warehouse-list__title">Warehouses</h1>
                <form className="warehouse-list__form">
                    <input className="warehouse-list__search" type="text" placeholder="Search..."></input>
                    <button className="warehouse-list__button">+ Add New Warehouse</button>
                </form>
            </div>
            <ul className="warehouse-list__warehouses">
                
            </ul>
        </section>
    );
}

export default WarehouseList;