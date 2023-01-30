import "./AddInventoryItem.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/images/icons/error-24px.svg";
import CTA from "../CTA/CTA";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AddInventoryItem() {
    const [warehouses, setWarehousesList] = useState([]);
    const [quantity, setQuantity] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [errorMessages, setErrorMessages] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        window.scroll({
            top: 0,
            right: 0,
            behavior: "smooth"
          });
        axios
            .get(`${process.env.REACT_APP_SERVER}/warehouses`)
            .then(response => {
                setWarehousesList(response.data)
            })
    }, []);

    function handleSelectInStock() {
        setQuantity(true);
    }

    function handleSelectNoStock() {
        setQuantity(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let quantity = 0;
        let warehouseId = "";

        if (event.target.status.value === "In Stock") {
            quantity = Number(event.target.quantity.value);
        }

        if (event.target.status.value === "Out of Stock") {
            quantity = 0;
        }

        const selectedWarehouse = warehouses.find((warehouse) => warehouse.name === event.target.warehouseName.value);

        if (event.target.warehouseName.value) {
            warehouseId = selectedWarehouse.id;
        }

        const newInventoryItem = {
            warehouseID: warehouseId,
            warehouseName: event.target.warehouseName.value,
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.category.value,
            status: event.target.status.value,
            quantity: quantity
        }

        axios
            .post(`${process.env.REACT_APP_SERVER}/inventories`, newInventoryItem)
            .then(() => {
                setIsSuccessful(true);
                setTimeout(() => navigate("/inventories"), 1500);
                event.target.reset();
                setQuantity(false);
                setErrorMessages(new Array(6).fill(""));
            })
            .catch(error => {
                setErrorMessages(error.response.data);
            })
    }

    if (!warehouses) {
        return <span>Loading...</span>
    }

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
            <form className="add-inventory__form" onSubmit={handleSubmit}>
                <div className="add-inventory__details">
                    <div className="add-inventory__warehouse-details">
                        <div className="add-inventory__inner-container">
                            <h2 className="add-inventory__warehouse-details-title">Item Details</h2>
                            <div className="add-inventory__warehouse-name">
                                <label className="add-inventory__label" htmlFor="itemName">Item Name</label>
                                <input className="add-inventory__input" name="itemName" type="text" placeholder="Item Name"></input>
                                {errorMessages[0] &&
                                <div className="add-inventory__error-message">
                                    <img className="add-inventory__error-icon" src={errorIcon} alt="Error icon" />
                                    <p className="add-inventory__error">{errorMessages[0]}</p>
                                </div>}
                            </div>
                            <div className="add-inventory__label-container">
                                <label className="add-inventory__label" htmlFor="description">Description</label>
                                <textarea className="add-inventory__text-area" name="description" placeholder="Please enter a brief item description..."></textarea>
                                {errorMessages[1] &&
                                <div className="add-inventory__error-message add-inventory__description-error">
                                    <img className="add-inventory__error-icon" src={errorIcon} alt="Error icon" />
                                    <p className="add-inventory__error">{errorMessages[1]}</p>
                                </div>}
                            </div>
                            <div className="add-inventory__label-container">
                                <label className="add-inventory__label" htmlFor="category">Category</label>
                                <select className="add-inventory__select" name="category">
                                    <option defaultValue className="add-inventory__placeholder" value="">Please Select</option>
                                    <option className="add-inventory__option" value="Accessories">Accessories</option>
                                    <option className="add-inventory__option" value="Apparel">Apparel</option>
                                    <option className="add-inventory__option" value="Electronics">Electronics</option>
                                    <option className="add-inventory__option" value="Gear">Gear</option>
                                    <option className="add-inventory__option" value="Health">Health</option>
                                </select>
                                {errorMessages[2] &&
                                <div className="add-inventory__error-message">
                                    <img className="add-inventory__error-icon" src={errorIcon} alt="Error icon" />
                                    <p className="add-inventory__error">{errorMessages[2]}</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="add-inventory__contact-details">
                        <div className="add-inventory__inner-container">
                            <h2 className="add-inventory__warehouse-details-title">Item Availability</h2>
                            <div className="add-inventory__label-container">
                                <label className="add-inventory__label" htmlFor="status">Status</label>
                                <div className="add-inventory__radio-buttons">
                                    <div className="add-inventory__radio-container"> 
                                        <input className="add-inventory__radio" id="in-stock"type="radio" name="status" value="In Stock" onClick={handleSelectInStock}></input>
                                        <label htmlFor="in-stock" className="add-inventory__stock">In stock</label>
                                    </div>
                                    <div className="add-inventory__radio-container">
                                        <input className="add-inventory__radio" id="out-of-stock"type="radio" name="status" value="Out of Stock"onClick={handleSelectNoStock}></input>
                                        <label htmlFor="out-of-stock" className="add-inventory__stock">Out of stock</label>
                                    </div>
                                </div>
                                {errorMessages[3] &&
                                <div className="add-inventory__error-message">
                                    <img className="add-inventory__error-icon" src={errorIcon} alt="Error icon" />
                                    <p className="add-inventory__error">{errorMessages[3]}</p>
                                </div>}
                            </div>
                            {quantity === true ? <div className="add-inventory__label-container">
                                <label className="add-inventory__label" htmlFor="quantity">Quantity</label>
                                <input className="add-inventory__input" name="quantity" type="text" placeholder="0"></input>
                            </div> : ""}
                            {quantity === true && errorMessages[4] &&
                                <div className="add-inventory__error-message">
                                    <img className="add-inventory__error-icon" src={errorIcon} alt="Error icon" />
                                    <p className="add-inventory__error">{errorMessages[4]}</p>
                                </div>}
                            <div className="add-inventory__label-container">
                                <label className="add-inventory__label" htmlFor="warehouseName">Warehouse</label>
                                <select className="add-inventory__select" name="warehouseName">
                                    <option defaultValue className="add-inventory__placeholder" value="">Please Select</option>
                                    {warehouses.map(warehouse => (
                                        <option className="add-inventory__option" value={warehouse.name} key={warehouse.name}>{warehouse.name}</option>
                                    ))}
                                </select>
                                {errorMessages[5] &&
                                <div className="add-inventory__error-message">
                                    <img className="add-inventory__error-icon" src={errorIcon} alt="Error icon" />
                                    <p className="add-inventory__error">{errorMessages[5]}</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {isSuccessful 
                    && <div className="add-inventory__modal">
                            Inventory item is successfully added.
                        </div>
                }
                <div className="add-inventory__button-container">
                    <div className="add-inventory__button">
                        <CTA link="/inventories" text="Cancel" type="secondary"/>
                    </div>
                    <div className="add-inventory__button">
                        <CTA isButton="true" text="+ Add Item"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddInventoryItem;