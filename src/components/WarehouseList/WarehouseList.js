import "./WarehouseList.scss"
import axios from 'axios';
import { useState, useEffect } from "react";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";
import CTA from "../CTA/CTA";
import sortIcon from "../../assets/images/icons/sort-24px.svg";

function WarehouseList() {
    const [warehouses, setWarehousesList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/warehouses")
            .then(response => {
                setWarehousesList(response.data)
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
                    <div className="warehouse-list__button">
                        <CTA text="+ Add New Warehouse" link="/warehouses/add"/>
                    </div>
                </form>
            </div>
            <div className="warehouse-list__label-strip">
                <div className="warehouse-list__label-container">
                    <h4 className="warehouse-list__label-item">Warehouse</h4>
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-list__label-container warehouse-list__label-address">
                    <h4 className="warehouse-list__label-item">Address</h4>
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-list__label-container warehouse-list__label-contact-name">
                    <h4 className="warehouse-list__label-item">Contact Name</h4>
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-list__label-container warehouse-list__label-contact-info">
                    <h4 className="warehouse-list__label-item">Contact Information</h4>
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-list__label-container">
                    <h4 className="warehouse-list__label-item">Actions</h4>
                </div>
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