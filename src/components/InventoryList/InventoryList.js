import "./InventoryList.scss";
import axios from "axios";
import InventoryItem from "../InventoryItem/InventoryItem";
import { useEffect, useState } from "react";

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
    <main className="inventory-container">
      <h1>Inventory</h1>
      <input type="text" placeholder="Search..." />
      <button>+Add New Item</button>
      {inventoryList.map((inventory)=> <InventoryItem key={inventory.id} item={inventory}/>)}
    </main>
  );
}

export default InventoryList;
