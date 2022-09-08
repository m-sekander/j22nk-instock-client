import { Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import CTA from "../Button/CTA";

function WarehouseDetails() {
    
    return (
        <section className="warehouse">
            <div className="warehouse__header">
                <div className="warehouse__left">
                    <Link className="warehouse__back" to="/warehouses">
                        <img className="" src={backArrow} alt="Back arrow icon"/>
                    </Link>
                    <h1 className="warehouse__name">Washington</h1>
                </div>
                <div className="warehouse__edit-mobile">
                    <CTA icon={editIcon} link="/warehouses/:warehouseId/edit"/>
                </div>
                <div className="warehouse__edit-tablet-desktop">
                    <CTA icon={editIcon} text="Edit" link="/warehouses/:warehouseId/edit"/>
                </div>
            </div>
            <div className="warehouse__content">
                <div className="warehouse__details">
                    <div className="warehouse__address-container">
                        <h4 className="warehouse__label">Warehouse Address</h4>
                        <p className="warehouse__info">33 Pearl St SW, Washington, USA</p>
                    </div>
                    <div className="warehouse__contact-container">
                        <div className="warehouse__contact-name-container">
                            <h4 className="warehouse__label">Contact Name</h4>
                            <p className="warehouse__info">Graeme Lyon</p>
                            <p className="warehouse__info">Warehouse Manager</p>
                        </div>
                        <div className="warehouse__contact-info-container">
                            <h4 className="warehouse__label">Contact Information</h4>  
                            <p className="warehouse__info">+1 (647) 504-0911</p>
                            <p className="warehouse__info">glyon@instock.com</p>
                        </div>
                    </div>
                </div>





            </div>
        </section>
    );
}


export default WarehouseDetails;