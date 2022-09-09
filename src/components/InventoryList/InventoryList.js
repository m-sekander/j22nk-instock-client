import "./InventoryList.scss";
import axios from "axios";
import InventoryItem from "../InventoryItem/InventoryItem";
import Button from "../CTA/CTA";
import { useEffect, useState } from "react";
import sortIcon from "../../assets/images/icons/sort-24px.svg";

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/inventories")
      .then((response) => {
        const data = response.data;
        setInventoryList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <section className="inventory-list">
      <div className="inventory-list__header">
        <h1 className="inventory-list__title">Inventory</h1>
        <form className="inventory-list__form">
          <input
            className="inventory-list__search"
            type="text"
            placeholder="Search..."
          />
          <div className="inventory-list__button">
            <Button text={"+ Add New Item"} link="/inventories/add" />
          </div>
        </form>
      </div>
      <div className="warehouse-list__label-strip">
        <div className="warehouse-list__label-container">
          <h4 className="warehouse-list__label-item">Warehouse</h4>
          <img
            className="warehouse-list__label-icon"
            src={sortIcon}
            alt="Sort icon"
          />
        </div>
        <div className="warehouse-list__label-container">
          <h4 className="warehouse-list__label-item">Address</h4>
          <img
            className="warehouse-list__label-icon"
            src={sortIcon}
            alt="Sort icon"
          />
        </div>
        <div className="warehouse-list__label-container">
          <h4 className="warehouse-list__label-item">Contact Name</h4>
          <img
            className="warehouse-list__label-icon"
            src={sortIcon}
            alt="Sort icon"
          />
        </div>
        <div className="warehouse-list__label-container">
          <h4 className="warehouse-list__label-item">Contact Information</h4>
          <img
            className="warehouse-list__label-icon"
            src={sortIcon}
            alt="Sort icon"
          />
        </div>
        <div className="warehouse-list__label-container">
          <h4 className="warehouse-list__label-item">Actions</h4>
        </div>
      </div>
      {inventoryList.map((inventory) => (
        <InventoryItem key={inventory.id} item={inventory} />
      ))}
    </section>
  );
}

export default InventoryList;
