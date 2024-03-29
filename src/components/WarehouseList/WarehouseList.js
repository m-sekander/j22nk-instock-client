import "./WarehouseList.scss"
import axios from 'axios';
import { useState, useEffect } from "react";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";
import CTA from "../CTA/CTA";
import sortIcon from "../../assets/images/icons/sort-24px.svg";
import Loading from "../Loading/Loading";

function WarehouseList() {
    const [warehouses, setWarehousesList] = useState(null);
    const [sortedWarehouses, setSortedWarehousesList] = useState(null);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        window.scroll({
            top: 0,
            right: 0,
            behavior: "smooth"
          });
          
        axios
            .get("http://localhost:8080/warehouses")
            .then(response => {
                setWarehousesList(response.data)
            })
    }, []);
  
    const handleSortWarehouses = () => {
        if (!reverse) {
            const sortedWarehouses = warehouses.sort((a,b) => ((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0));
            setSortedWarehousesList(sortedWarehouses);
            setReverse(true)
        } 
        else {
            const sortedWarehouses = warehouses.sort((a,b) => ((a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0));
            setSortedWarehousesList(sortedWarehouses);
            setReverse(false);
        }
    }

    const handleSortAddresses = () => {
        if (!reverse) {
            const sortedAddresses = warehouses.sort((a,b) => ((a.address > b.address) ? -1 : (a.address > b.address) ? 1: 0))
            setSortedWarehousesList(sortedAddresses);
            setReverse(true);
        } else {
            const sortedAddresses = warehouses.sort((a,b) => ((a.address < b.address) ? -1 : (a.address < b.address) ? 1: 0))
            setSortedWarehousesList(sortedAddresses);
            setReverse(false);
        }
    }

    const handleSortContact = () => {
        if (!reverse) {
            const sortedContactName = warehouses.sort((a,b) => ((a.contact.name < b.contact.name) ? -1 : (a.contact.name < b.contact.name) ? 1: 0))
            setSortedWarehousesList(sortedContactName);
            setReverse(true);
        } else {
            const sortedContactName = warehouses.sort((a,b) => ((a.contact.name > b.contact.name) ? -1 : (a.contact.name > b.contact.name) ? 1: 0))
            setSortedWarehousesList(sortedContactName);
            setReverse(false);
        }
    }

    if (!warehouses) {
        return <Loading />
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
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" onClick={handleSortWarehouses}/>
                </div>
                <div className="warehouse-list__label-container warehouse-list__label-address">
                    <h4 className="warehouse-list__label-item">Address</h4>
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" onClick={handleSortAddresses}/>
                </div>
                <div className="warehouse-list__label-container warehouse-list__label-contact-name">
                    <h4 className="warehouse-list__label-item">Contact Name</h4>
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" onClick={handleSortContact}/>
                </div>
                <div className="warehouse-list__label-container warehouse-list__label-contact-info">
                    <h4 className="warehouse-list__label-item">Contact Information</h4>
                    <img className="warehouse-list__label-icon" src={sortIcon} alt="Sort icon" onClick={handleSortContact}/>
                </div>
                <div className="warehouse-list__label-container">
                    <h4 className="warehouse-list__label-item">Actions</h4>
                </div>
            </div>
            <ul className="warehouse-list__warehouses">
                {(!sortedWarehouses ? warehouses : sortedWarehouses).map(warehouse => (
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
                        setWarehousesList={setWarehousesList}
                    />
                ))}
            </ul>
        </section>
    );
}

export default WarehouseList;