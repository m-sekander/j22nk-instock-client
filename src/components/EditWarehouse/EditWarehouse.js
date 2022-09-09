import "./EditWarehouse.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import CTA from "../CTA/CTA";
import { Link } from "react-router-dom";

function EditWarehouse() {
    return (
        <div className="edit-warehouse">
            <div className="edit-warehouse__header">
                <Link className="edit-warehouse__back-link" to="/warehouses">
                    <img className="edit-warehouse__back" src={backIcon} alt="Back icon" />
                    <h1 className="edit-warehouse__title">Edit Warehouse</h1>
                </Link>
            </div>
            <form className="edit-warehouse__form">
                <div className="edit-warehouse__details">
                    <div className="edit-warehouse__warehouse-details">
                        <div className="edit-warehouse__inner-container">
                            <h2 className="edit-warehouse__warehouse-details-title">Warehouse Details</h2>
                            <div className="edit-warehouse__warehouse-name">
                                <h3 className="edit-warehouse__label">Warehouse Name</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                            <div>
                                <h3 className="edit-warehouse__label">Street Address</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                            <div>
                                <h3 className="edit-warehouse__label">City</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                            <div>
                                <h3 className="edit-warehouse__label">Country</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className="edit-warehouse__contact-details">
                        <div className="edit-warehouse__inner-container">
                            <h2 className="edit-warehouse__warehouse-details-title">Contact Details</h2>
                            <div>
                                <h3 className="edit-warehouse__label">Contact Name</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                            <div>
                                <h3 className="edit-warehouse__label">Position</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                            <div>
                                <h3 className="edit-warehouse__label">Phone Number</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                            <div>
                                <h3 className="edit-warehouse__label">Email</h3>
                                <input className="edit-warehouse__input" type="text"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-warehouse__button-container">
                    <div className="edit-warehouse__button">
                        <CTA link="/warehouses" text="Cancel" type="secondary"/>
                    </div>
                    <div className="edit-warehouse__button">
                        <CTA isButton={true} text="Save"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditWarehouse;