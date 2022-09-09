import './EditInventory.scss';
import { Link } from 'react-router-dom';
import arrowBack from '../../assets/images/icons/arrow_back-24px.svg';
import CTA from '../CTA/CTA';
import axios from 'axios';
import { useState, useEffect } from 'react';

function EditInventory() {
    const [warehouses, setWarehousesList] = useState([]);
    
    useEffect(() => {
        axios
        .get("http://localhost:8080/warehouses")
        .then(response => {
            setWarehousesList(response.data);
        }).catch (error => {
            console.log("For devs:", error)
        })
    }, []);
    
    function handleSubmit(event) {
        event.preventDefault();
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
                            <input className="edit-inventory__item-name" type="text" id="name" name="name" />
                        </label>
                        <label className="edit-inventory__label" htmlFor="description">Description
                            <textarea className="edit-inventory__description" name="description" id="description" />
                        </label>
                        <label className="edit-inventory__label" htmlFor="category">Category
                            <select className="edit-inventory__select" name="category" id="category">
                                <option className="edit-inventory__option" value="">Please Select</option>
                                <option className="edit-inventory__option" value="Accessories">Accessories</option>
                                <option className="edit-inventory__option" value="Apparel">Apparel</option>
                                <option className="edit-inventory__option" value="Electronics">Electronics</option>
                                <option className="edit-inventory__option" value="Gear">Gear</option>
                                <option className="edit-inventory__option" value="Health">Health</option>
                            </select>
                        </label>
                    </div>
                    <div className="edit-inventory__availability">
                        <h2 className="edit-inventory__subtitle">Item Availability</h2>
                        <label className="edit-inventory__label">Status
                            <div className="edit-inventory__radios">
                                <div className="edit-inventory__radio">
                                    <input className="edit-inventory__radio-input" type="radio" name="status" id="status1" value="In Stock" />
                                    <span className="edit-inventory__radio-label">In stock</span>
                                </div>
                                <div className="edit-inventory__radio">
                                    <input className="edit-inventory__radio-input" type="radio" name="status" id="status2" value="Out of Stock" />
                                    <span className="edit-inventory__radio-label">Out of stock</span>
                                </div>
                            </div>
                        </label>
                        <label  className="edit-inventory__label" htmlFor="Warehouse">Warehouse
                            <select className="edit-inventory__select" name="category" id="category">
                                {warehouses.map(warehouse => (
                                    <option className="edit-inventory__option" value={warehouse.name} key={warehouse.name}>{warehouse.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    {/* {isSuccessful 
                        && <div className="edit-inventory__modal">
                                Warehouse is successfully added.
                            </div>
                    } */}
                </div>
                <div className="edit-inventory__actions">
                    <CTA text="Cancel" link="/inventories" type="secondary" />
                    <CTA text="Save" isButton={true} />
                </div>
            </form>
        </div>
    )
};

export default EditInventory;