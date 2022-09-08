import "./WarehouseInventory.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import chevronIcon from "../../assets/images/icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';

function WarehouseInventoryItem({ id, warehouseId, itemName, category, status, quantity }) {
    return (
        <li className="inventory-list-item">
            <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__label">Inventory Item</h4>
                <Link className="inventory-list-item__item-link" to={`/inventory/${id}`}>
                    <p className="inventory-list-item__info inventory-list-item__name">{itemName}</p>
                    <img className="warehouse__chevron" src={chevronIcon} alt="Chevron icon"/>
                </Link>
            </div>
            <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__label">Status</h4>
                <p className="inventory-list-item__info">{status}</p>
            </div>
            <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__label">Category</h4>
                <p className="inventory-list-item__info">{category}</p>
            </div>
            <div className="inventory-list-item__container">
                <h4 className="inventory-list-item__label">Qty</h4>
                <p className="inventory-list-item__info">{quantity}</p>
            </div>
            <div className="inventory-list-item__container">
                <img className="inventory-list-item__delete" src={deleteIcon} alt="Delete button" />
                <Link to={`/warehouses/${warehouseId}/edit`} className="warehouse__edit-link"><img className="warehouse__edit" src={editIcon} alt="Edit button" /></Link>
            </div>
        </li>
    );
}

export default WarehouseInventoryItem;