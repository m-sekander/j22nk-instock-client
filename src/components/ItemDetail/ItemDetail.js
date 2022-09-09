import "./ItemDetail.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

function ItemDetail() {
    
    const [itemDetail, setItemDetail] = useState(null);
    const params = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/inventories/${params.inventoryId}`)
          .then(response => {
            const data = response.data;
            setItemDetail(data);
          })
          .catch(error => {
            console.error(error);
          })
        }, [params]);

    if (itemDetail === null) {
        return
    }

// if still null return loading
  return (
    <div className="itemdetail-container">
    <h4>Item Description</h4>
    <p>{itemDetail.description}</p>
    <h4>Category</h4>
    <p>{itemDetail.category}</p>
    <h4>Status</h4>
    <p>{itemDetail.status}</p>
    <h4>Quantity</h4>
    <p>{itemDetail.quantity}</p>
    <h4>Warehouse</h4>
    <p>{itemDetail.warehouseName}</p>
    </div>
  )
}

export default ItemDetail