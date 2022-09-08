import "./InventoryItem.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import rightIcon from "../../assets/images/icons/chevron_right-24px.svg";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { useState } from 'react';

function InventoryItem({ item }) {
  const [deleteActive, setDeleteActive] = useState(false);

  const getStatusClass = () => {
      if (item.status === "In Stock") {
          return "inventory__item-greenstatus";
      }
      if (item.status === "Out of Stock") {
          return "inventory__item-redstatus";
      }    
  }

  return (
    <div className="inventory-list-main">
      <div className="inventory__list">
        <div className="inventory-list__container-left">
          <h4 className="inventory-list__label">INVENTORY ITEM</h4>
          <div className="inventory-list__label-container">
            <p className="inventory-list__label-item">{item.itemName}</p>
            <img className="inventory-list__label-icon" src={rightIcon} alt="" />
          </div>
          <h4 className="inventory-list__label">CATEGORY</h4>
          <p className="inventory-list__label-category">{item.category}</p>
        </div>
        <div className="inventory-list__container-right">
          <h4 className="inventory-list__label">STATUS</h4>
          <p className={getStatusClass()}>{item.status}</p>
          <div className="inventory-list-qty">
          <h4 className="inventory-list__label">QTY</h4>
          <p className="inventory-list__label-qty">{item.quantity}</p>
          </div>
          <h4 className="inventory-list__label">WAREHOUSE</h4>
          <p className="inventory-list__label-warehouse">{item.warehouseName}</p>
        </div>
      </div>
      <div style={{display: "flex" , justifyContent: "space-between"}}>
        <img src={deleteIcon} alt="Delete icon" onClick={() => setDeleteActive(true)} />
        <Link to="/inventories/:inventoryId/edit"><img src={editIcon} alt="Edit icon" /></Link>
      </div>
      {deleteActive && <Modal isWarehouse={false} name={item.itemName} id={item.id} setDeleteActive={setDeleteActive}/>}
    </div> 
  );
}

export default InventoryItem;
