import "./WarehouseInventoryItem.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import chevronIcon from "../../assets/images/icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Modal from "../Modal/Modal";

function WarehouseInventoryItem({ id, itemName, category, status, quantity, setWarehouseInventory, warehouseId }) {
    const [deleteActive, setDeleteActive] = useState(false);

    return (
        <>
            <li className="inventory-list-item">
                <div className="inventory-list-item__container">
                    <h4 className="inventory-list-item__label">Inventory Item</h4>
                    <div>
                        <Link className="inventory-list-item__item-link" to={`/inventories/${id}`}>
                            <p className="inventory-list-item__info inventory-list-item__name">
                                {itemName}
                                <img className="warehouse__chevron" src={chevronIcon} alt="Chevron icon"/>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="inventory-list-item__container inventory-list-item__status">
                    <h4 className="inventory-list-item__label">Status</h4>
                    {status === "In Stock" ? <p className="inventory-list-item__info inventory-list-item__in-stock">{status}</p> : <p className="inventory-list-item__info inventory-list-item__out-of-stock">{status}</p>}
                </div>
                <div className="inventory-list-item__container nventory-list-item__category">
                    <h4 className="inventory-list-item__label">Category</h4>
                    <p className="inventory-list-item__info">{category}</p>
                </div>
                <div className="inventory-list-item__container nventory-list-item__quantity">
                    <h4 className="inventory-list-item__label">Qty</h4>
                    <p className="inventory-list-item__info">{quantity}</p>
                </div>
                <div className="inventory-list-item__container inventory-list-item__buttons">
                    <img className="inventory-list-item__delete" src={deleteIcon} alt="Delete button" onClick={() => setDeleteActive(true)} />
                    <Link to={`/inventories/${id}/edit`} className="warehouse__edit-link"><img className="warehouse__edit" src={editIcon} alt="Edit button" /></Link>
                </div>
            </li>
            {deleteActive && <Modal isWarehouse={false} name={itemName} id={id} setDeleteActive={setDeleteActive} setWarehouseInventory={setWarehouseInventory} warehouseId={warehouseId} />}
        </>
    );
}

export default WarehouseInventoryItem;