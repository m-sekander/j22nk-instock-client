import "./InventoryList.scss";
import axios from "axios";
import InventoryItem from "../InventoryItem/InventoryItem";
import Button from "../CTA/CTA";
import { useEffect, useState } from "react";
import sortIcon from "../../assets/images/icons/sort-24px.svg";

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  const [sortedInventoriesList, setSortedInventoriesList] = useState(null);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    window.scroll({
      top: 0,
      right: 0,
      behavior: "smooth"
    });
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

  const handleSortInventories = () => {
    if (!reverse) {
        const sortedInventories = inventoryList.sort((a,b) => ((a.itemName < b.itemName) ? -1 : (a.itemName > b.itemName) ? 1 : 0));
        setSortedInventoriesList(sortedInventories);
        setReverse(true);
    } else {
        const sortedInventories = inventoryList.sort((a,b) => ((a.itemName < b.itemName) ? 1 : (a.itemName > b.itemName) ? -1 : 0));
        setSortedInventoriesList(sortedInventories);
        setReverse(false);
    }
  }

  const handleSortCategories = () => {
    if (!reverse) {
        const sortedCategories = inventoryList.sort((a,b) => ((a.category < b.category) ? -1 : (a.category > b.category) ? 1 : 0));
        setSortedInventoriesList(sortedCategories);
        setReverse(true);
    } else {
        const sortedCategories = inventoryList.sort((a,b) => ((a.category < b.category) ? 1 : (a.category > b.category) ? -1 : 0));
        setSortedInventoriesList(sortedCategories);
        setReverse(false);
    }
}

const handleSortQuantity = () => {
  if (!reverse) {
      const sortedQuantity = inventoryList.sort((a,b) => ((a.quantity < b.quantity) ? -1 : (a.quantity > b.quantity) ? 1 : 0));
      setSortedInventoriesList(sortedQuantity);
      setReverse(true);
  } else {
      const sortedQuantity = inventoryList.sort((a,b) => ((a.quantity < b.quantity) ? 1 : (a.quantity > b.quantity) ? -1 : 0));
      setSortedInventoriesList(sortedQuantity);
      setReverse(false);
  }
}

const handleSortWarehouses = () => {
  if (!reverse) {
      const sortedWarehouses = inventoryList.sort((a,b) => ((a.warehouseName < b.warehouseName) ? -1 : (a.warehouseName > b.warehouseName) ? 1 : 0));
      setSortedInventoriesList(sortedWarehouses);
      setReverse(true)
  } 
  else {
      const sortedWarehouses = inventoryList.sort((a,b) => ((a.warehouseName < b.warehouseName) ? 1 : (a.warehouseName > b.warehouseName) ? -1 : 0));
      setSortedInventoriesList(sortedWarehouses);
      setReverse(false);
  }
}

  
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
      <div className="inventorylist__label-strip">
        <div className="inventorylist__label-container">
          <h4 className="inventorylist__label-item">Inventory Item</h4>
          <img
            className="inventorylist__label-icon"
            src={sortIcon}
            alt="Sort icon"
            onClick={handleSortInventories}
          />
        </div>
        <div className="inventorylist__label-container">
          <h4 className="inventorylist__label-item">Category</h4>
          <img
            className="inventorylist__label-icon"
            src={sortIcon}
            alt="Sort icon"
            onClick={handleSortCategories}
          />
        </div>
        <div className="inventorylist__label-container">
          <h4 className="inventorylist__label-item">Status</h4>
          <img
            className="inventorylist__label-icon"
            src={sortIcon}
            alt="Sort icon"
            onClick={handleSortQuantity}
          />
        </div>
        <div className="inventorylist__label-container">
          <h4 className="inventorylist__label-item">Qty</h4>
          <img
            className="inventorylist__label-icon"
            src={sortIcon}
            alt="Sort icon"
            onClick={handleSortQuantity}
          />
        </div>
        <div className="inventorylist__label-container warehouse-container" onClick={handleSortWarehouses}>
          <h4 className="inventorylist__label-item">Warehouse</h4>
          <img
            className="inventorylist__label-icon warehouse-icon"
            src={sortIcon}
            alt="Sort icon"
          />
        </div>
        <div className="inventorylist__label-container actions-container">
          <h4 className="inventorylist__label-item">Actions</h4>
        </div>
      </div>
      {(!sortedInventoriesList ? inventoryList : sortedInventoriesList).map((inventory) => (
        <InventoryItem key={inventory.id} item={inventory}/>
      ))}
    </section>
  );
}

export default InventoryList;
