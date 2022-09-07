import "./WarehouseList.scss"
import axios from 'axios';
import { useState, useEffect } from "react";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";

function WarehouseList() {
    const [warehouses, setWarehouseList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/warehouses")
            .then(response => {
                console.log(response.data)
                setWarehouseList(response.data)
            })
    }, []);

    if (!warehouses) {
        return <span>Loading...</span>
    }


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
                {warehouses.map(warehouse => (
                    <WarehouseListItem
                        key={warehouse.id}
                        id={warehouse.id}
                        name={warehouse.name}
                        address={warehouse.address}
                        city={warehouse.city}
                        country={warehouse.country}
                        contactName={warehouse.contact.name}
                        contactPhone={warehouse.contact.phone}
                        contactEmail={warehouse.contact.email}
                    />
                ))}
            </ul>
        </section>
    );
}

export default WarehouseList;