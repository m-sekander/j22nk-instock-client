import "./InventoryList.scss";
import axios from "axios";
import InventoryItem from "../InventoryItem/InventoryItem";
import Button from "../CTA/CTA";
import { useEffect, useState } from "react";

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
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
  
  return (
    <section className="inventory-list">
      <div className="inventory-list__header">
        <h1 className="inventory-list__title">Inventory</h1>
        <form className="inventory-list__form"> 
        <input className="inventory-list__search" type="text" placeholder="Search..." />
        <div className="inventory-list__button"> 
          <Button text={"+ Add New Item"} link="/inventories/add"/>
        </div>
        </form>
      </div>
        {inventoryList.map((inventory)=> <InventoryItem key={inventory.id} item={inventory}/>)}
    </section>
  );
}

export default InventoryList;
