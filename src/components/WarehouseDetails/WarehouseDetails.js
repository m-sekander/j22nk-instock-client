import { Link, useParams } from "react-router-dom";
import "./WarehouseDetails.scss";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import CTA from "../Button/CTA";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseDetails() {
    const { warehouseId } = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState(null);
    const [warehouseInventory, setWarehouseInventory] = useState(null);
    const [notFound, setNotFound] = useState(false);

    // GET single warehouse details
    useEffect(() => {
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
                console.log(warehouseInventory);
            })  
            .catch(error => {
                <span>Warehouse inventories not found</span>
            })
    }, [warehouseId])

    if (notFound) {
        return <span>Warehouse not found</span>
    }

    if (!warehouseDetails) {
        return <span>Loading...</span>
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
                    <CTA icon={editIcon} text="Edit" link="/warehouses/:warehouseId/edit"/>
                </div>
            </div>
            <div className="warehouse-details__content">
                <div className="warehouse-details__details">
                    <div className="warehouse-details__address-container">
                        <h4 className="warehouse-details__label">Warehouse Address:</h4>
                        <p className="warehouse-details__info">
                            {warehouseDetails.address}, {warehouseDetails.city}, {warehouseDetails.country}
                        </p>
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
        </section>
    );
}


export default WarehouseDetails;