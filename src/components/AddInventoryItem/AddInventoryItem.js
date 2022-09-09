import "./AddInventoryItem.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import CTA from "../CTA/CTA";
import { Link } from "react-router-dom";

function AddInventoryItem() {
    return (
        <div className="add-inventory">
            <div className="add-inventory__header">
                <div className="add-inventory__link-container">
                    <Link className="add-inventory__back-link" to="/inventories">
                        <img className="add-inventory__back" src={backIcon} alt="Back icon" />
                    </Link>
                </div>
                <h1 className="add-inventory__title">Add New Inventory Item</h1>
            </div>
            <form className="add-inventory__form">
                <div className="add-inventory__details">
                    <div className="add-inventory__warehouse-details">
                        <div className="add-inventory__inner-container">
                            <h2 className="add-inventory__warehouse-details-title">Item Details</h2>
                            <div className="add-inventory__warehouse-name">
                                <h3 className="add-inventory__label">Item Name</h3>
                                <input className="add-inventory__input" type="text" placeholder="Item Name"></input>
                            </div>
                            <div>
                                <h3 className="add-inventory__label">Description</h3>
                                <textarea className="add-inventory__text-area" placeholder="Please enter a brief item description..."></textarea>
                            </div>
                            <div>
                                <h3 className="add-inventory__label">Category</h3>
                                <select className="add-inventory__select">
                                    <option value="" disable selected className="add-inventory__placeholder">Please Select</option>
                                    <option value="apparel">Apparel</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="gear">Gear</option>
                                    <option value="health">Health</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="add-inventory__contact-details">
                        <div className="add-inventory__inner-container">
                            <h2 className="add-inventory__warehouse-details-title">Item Availability</h2>
                            <div>
                                <h3 className="add-inventory__label">Status</h3>
                                <div className="add-inventory__radio-buttons">
                                    <div className="add-inventory__radio-container"> 
                                        <input className="add-inventory__radio" type="radio" name="stock"></input>
                                        <p className="add-inventory__stock">In stock</p>
                                    </div>
                                    <div className="add-inventory__radio-container">
                                        <input className="add-inventory__radio" type="radio" name="stock"></input>
                                        <p className="add-inventory__stock">Out of stock</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="add-inventory__label">Quantity</h3>
                                <input className="add-inventory__input" type="text" placeholder="0"></input>
                            </div>
                            <div>
                                <h3 className="add-inventory__label">Warehouse</h3>
                                <select className="add-inventory__select">
                                    {/* map out options here based on avaialble warehouses */}
                                    <option value="" disable selected className="add-inventory__placeholder">Please Select</option>
                                    <option value="apparel">Apparel</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="gear">Gear</option>
                                    <option value="health">Health</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-inventory__button-container">
                    <div className="add-inventory__button">
                        <CTA link="/warehouses" text="Cancel" type="secondary"/>
                    </div>
                    <div className="add-inventory__button">
                        <CTA isButton={true} text="+ Add Item"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddInventoryItem;