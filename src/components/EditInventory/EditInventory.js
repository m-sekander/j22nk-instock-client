import './EditInventory.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import arrowBack from '../../assets/images/icons/arrow_back-24px.svg';
import CTA from '../CTA/CTA';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/NotFound';
import errorIcon from "../../assets/images/icons/error-24px.svg";

function EditInventory() {
    const [warehouses, setWarehousesList] = useState(null);
    const [inventoryData, setInventoryData] = useState(null);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [warehouse, setWarehouse] = useState("");
    const [notFoundTrigger, setNotFoundTrigger] = useState(null);
    const [errorMessages, setErrorMessages] = useState(false);

    const {inventoryId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scroll({
            top: 0,
            right: 0,
            behavior: "smooth"
          });
        axios
        .get(`${process.env.REACT_APP_SERVER}/inventories/${inventoryId}`)
        .then((response) => {
            setInventoryData(response.data);
            setCategory(response.data.category);
            setStatus(response.data.status);
            if (response.data.status === "In Stock") {
                setQuantity(response.data.quantity);
            }
            setWarehouse(response.data.warehouseName);
            return axios.get(`${process.env.REACT_APP_SERVER}/warehouses`)
        })
        .then(response => {
            setWarehousesList(response.data);
        }).catch (error => {
            console.log("For devs:", error);
            setNotFoundTrigger(error.response.data.message);
        })
    }, [inventoryId]);

    function changeHandler(event) {
        if (event.target.name === "category") {
            setCategory(event.target.value);
        } else if (event.target.name === "warehouseName") {
            setWarehouse(event.target.value);
        } else if (event.target.name === "status") {
            setStatus(event.target.value);
            if (event.target.value === "Out of Stock") {
                setQuantity(null);
            }
            if (event.target.value === "In Stock") {
                setQuantity(0);
            }
        }
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        const selectedWarehouseId = warehouses.find((warehouse) => warehouse.name === event.target.warehouseName.value).id;

        const editedInventory = {
            id: inventoryData.id,
            warehouseId: selectedWarehouseId,
            warehouseName: event.target.warehouseName.value,
            itemName: event.target.name.value,
            description: event.target.description.value,
            category: event.target.category.value,
            status: event.target.status.value,
            quantity: (event.target.status.value==="In Stock" ? event.target.quantity.value : 0)
        }
        
        axios.put(`${process.env.REACT_APP_SERVER}/inventories/${inventoryId}`, editedInventory)
        .then((response) => {
            setIsSuccessful(true);
            setTimeout(() => navigate("/inventories"), 1500);
            setErrorMessages(new Array(6).fill(""));
            console.log("For devs:", response);
        }).catch((error) => {
            setErrorMessages(error.response.data);
            console.log("For devs:", error);
        })
    }

    // Don't render while the API is looking for the data
    if (!(warehouses && inventoryData)) {
        if (notFoundTrigger === "Id is not found") {
            return <NotFound />
        }
        return <Loading />
    }


    return (
        <div className="edit-inventory">
            <div className="edit-inventory__title-container">
                <Link to="/inventories" className="edit-inventory__link">
                    <img className="edit-inventory__back" src={arrowBack} alt="back icon"></img>
                </Link>
                <h1 className="edit-inventory__title">Edit Inventory Item</h1>
            </div>
            <form className="edit-inventory__form" onSubmit={handleSubmit}>
                <div className="edit-inventory__inputs">
                    <div className="edit-inventory__details">
                        <h2 className="edit-inventory__subtitle">Item Details</h2>
                        <label className="edit-inventory__label" htmlFor="name">Item Name
                            <input className="edit-inventory__item-name" type="text" id="name" name="name" defaultValue={inventoryData.itemName} />
                            {errorMessages[0] &&
                                <div className="edit-inventory__error">
                                    <img className="edit-inventory__error-icon" src={errorIcon} alt="error icon" />
                                    <h4 className="edit-inventory__error-message">{errorMessages[0]}</h4>
                                </div>}
                        </label>
                        <label className="edit-inventory__label" htmlFor="description">Description
                            <textarea className="edit-inventory__description" name="description" id="description" defaultValue={inventoryData.description} />
                            {errorMessages[1] &&
                                <div className="edit-inventory__error">
                                    <img className="edit-inventory__error-icon" src={errorIcon} alt="error icon" />
                                    <h4 className="edit-inventory__error-message">{errorMessages[1]}</h4>
                                </div>}
                        </label>
                        <label className="edit-inventory__label" htmlFor="category">Category
                            <select className="edit-inventory__select" name="category" id="category" value={category} onChange={changeHandler}>
                                <option className="edit-inventory__option" id="Accessories" value="Accessories">Accessories</option>
                                <option className="edit-inventory__option" id="Apparel" value="Apparel">Apparel</option>
                                <option className="edit-inventory__option" id="Electronics" value="Electronics">Electronics</option>
                                <option className="edit-inventory__option" id="Gear" value="Gear">Gear</option>
                                <option className="edit-inventory__option" id="Health" value="Health">Health</option>
                            </select>
                            {errorMessages[2] &&
                            <div className="edit-inventory__error">
                                <img className="edit-inventory__error-icon" src={errorIcon} alt="error icon" />
                                <h4 className="edit-inventory__error-message">{errorMessages[2]}</h4>
                            </div>}
                        </label>
                    </div>
                    <div className="edit-inventory__availability">
                        <h2 className="edit-inventory__subtitle">Item Availability</h2>
                        <label className="edit-inventory__label">Status
                            <div className="edit-inventory__radios">
                                <div className="edit-inventory__radio">
                                    <input className={`edit-inventory__radio-input ${status!=="In Stock" && "edit-inventory__radio-input--inactive"}`} checked={status==="In Stock"} type="radio" name="status" id="status1" value="In Stock" onChange={changeHandler} />
                                    <span className={`edit-inventory__radio-label ${status!=="In Stock" && "edit-inventory__radio-label--inactive"}`}>In stock</span>
                                </div>
                                <div className="edit-inventory__radio">
                                    <input className={`edit-inventory__radio-input ${status!=="Out of Stock" && "edit-inventory__radio-input--inactive"}`} checked={status==="Out of Stock"} type="radio" name="status" id="status2" value="Out of Stock" onChange={changeHandler} />
                                    <span className={`edit-inventory__radio-label ${status!=="Out of Stock" && "edit-inventory__radio-label--inactive"}`}>Out of stock</span>
                                </div>
                            </div>
                            {errorMessages[3] &&
                            <div className="edit-inventory__error">
                                <img className="edit-inventory__error-icon" src={errorIcon} alt="error icon" />
                                <h4 className="edit-inventory__error-message">{errorMessages[3]}</h4>
                            </div>}
                        </label>
                        {quantity!==null && <label className="edit-inventory__label" htmlFor="quantity">Quantity
                            <input className="edit-inventory__quantity" id="quantity" name="quantity" type="text" defaultValue={quantity}></input>
                            {errorMessages[4] &&
                            <div className="edit-inventory__error">
                                <img className="edit-inventory__error-icon" src={errorIcon} alt="error icon" />
                                <h4 className="edit-inventory__error-message">{errorMessages[4]}</h4>
                            </div>}
                        </label>}
                        <label  className="edit-inventory__label" htmlFor="warehouseName">Warehouse
                            <select className="edit-inventory__select" name="warehouseName" id="warehouseName" value={warehouse} onChange={changeHandler}>
                                {warehouses.map(warehouse => (
                                    <option className="edit-inventory__option" id={warehouse.name} value={warehouse.name} key={warehouse.name}>{warehouse.name}</option>
                                ))}
                            </select>
                            {errorMessages[5] &&
                            <div className="edit-inventory__error">
                                <img className="edit-inventory__error-icon" src={errorIcon} alt="error icon" />
                                <h4 className="edit-inventory__error-message">{errorMessages[5]}</h4>
                            </div>}
                        </label>
                    </div>
                </div>
                    {isSuccessful 
                        && <div className="edit-inventory__modal">
                                Warehouse was edited successfully.
                            </div>
                    }
                <div className="edit-inventory__actions">
                    <CTA text="Cancel" link="/inventories" type="secondary" />
                    <CTA text="Save" isButton={true} />
                </div>
            </form>
        </div>
    )
};

export default EditInventory;