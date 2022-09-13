import { Link, useParams } from "react-router-dom";
import "./WarehouseDetails.scss";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import sortIcon from "../../assets/images/icons/sort-24px.svg";
import CTA from "../CTA/CTA";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";
import NotFound from "../NotFound/NotFound";
import Loading from "../Loading/Loading";

function WarehouseDetails() {
    const { warehouseId } = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState(null);
    const [warehouseInventory, setWarehouseInventory] = useState(null);
    const [notFound, setNotFound] = useState(false);

    // GET single warehouse details
    useEffect(() => {
        window.scroll({
            top: 0,
            right: 0,
            behavior: "smooth"
          });

        axios
            .get("http://localhost:8080/warehouses/" + warehouseId)
            .then(response => {
                setWarehouseDetails(response.data);
            })
            .catch(error => {
                setNotFound(true);
            })
    }, [warehouseId])

    // GET single warehouse inventory list 
    useEffect(() => {
        axios
            .get("http://localhost:8080/inventories/")
            .then(response => {
                const inventoriesList = response.data;
                const warehouseInventory = inventoriesList.filter(singleInventoriesList => singleInventoriesList.warehouseID === warehouseId);
                setWarehouseInventory(warehouseInventory);
            })  
            .catch(error => {
                <span>Warehouse inventories not found</span>
            })
    }, [warehouseId])

    if (notFound) {
        return <NotFound />
    }

    if (!warehouseDetails) {
        return <Loading />
    }

    if (!warehouseInventory) {
        return <Loading />
    }
    
    return (
        <section className="warehouse-details">
            <div className="warehouse-details__header">
                <div className="warehouse-details__left">
                    <Link className="warehouse-details__back" to="/warehouses">
                        <img className="" src={backArrow} alt="Back arrow icon"/>
                    </Link>
                    <h1 className="warehouse-details__name">{warehouseDetails.name}</h1>
                </div>
                <div className="warehouse-details__edit-mobile">
                    <CTA icon={editIcon} link="/warehouses/:warehouseId/edit"/>
                </div>
                <div className="warehouse-details__edit-tablet-desktop">
                    <CTA icon={editIcon} text="Edit" link={`/warehouses/${warehouseId}/edit`}/>
                </div>
            </div>
            <div className="warehouse-details__content">
                <div className="warehouse-details__details">
                    <div className="warehouse-details__address-container">
                        <h4 className="warehouse-details__label">Warehouse Address:</h4>
                        <p className="warehouse-details__info">{warehouseDetails.address},</p>
                        <p className="warehouse-details__info">{warehouseDetails.city}, {warehouseDetails.country}</p>
                    </div>
                    <div className="warehouse-details__contact-container">
                        <div className="warehouse-details__contact-name-container">
                            <h4 className="warehouse-details__label">Contact Name:</h4>
                            <p className="warehouse-details__info">{warehouseDetails.contact.name}</p>
                            <p className="warehouse-details__info">{warehouseDetails.contact.position}</p>
                        </div>
                        <div className="warehouse-details__contact-info-container">
                            <h4 className="warehouse-details__label">Contact Information:</h4>  
                            <p className="warehouse-details__info">{warehouseDetails.contact.phone}</p>
                            <p className="warehouse-details__info">{warehouseDetails.contact.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="warehouse-details__label-strip">
                <div className="warehouse-details__label-container">
                    <h4 className="warehouse-details__label-item">Inventory Item</h4>
                    <img className="warehouse-details__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-details__label-container">
                    <h4 className="warehouse-details__label-item">Category</h4>
                    <img className="warehouse-details__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-details__label-container warehouse-details__label-status">
                    <h4 className="warehouse-details__label-item">Status</h4>
                    <img className="warehouse-details__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-details__label-container">
                    <h4 className="warehouse-details__label-item">Quantity</h4>
                    <img className="warehouse-details__label-icon" src={sortIcon} alt="Sort icon" />
                </div>
                <div className="warehouse-details__label-container">
                    <h4 className="warehouse-details__label-item">Actions</h4>
                </div>
            </div>
            <ul className="warehouse-details__inventory-list">
                {warehouseInventory.map(inventoryItem => (
                    <WarehouseInventoryItem 
                        key={inventoryItem.id}
                        id={inventoryItem.id}
                        itemName={inventoryItem.itemName}
                        category={inventoryItem.category}
                        status={inventoryItem.status}
                        quantity={inventoryItem.quantity}
                        />
                ))}
            </ul>
        </section>
    );
}


export default WarehouseDetails;