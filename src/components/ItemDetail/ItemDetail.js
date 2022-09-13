import "./ItemDetail.scss";
import CTA from '../CTA/CTA'
import axios from 'axios';
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

function ItemDetail() {
    const { inventoryId } =useParams();
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

    const getStatusClass = () => {
      if (itemDetail.status === "In Stock") {
          return "itemdetail-details-greenstatus";
      }
      if (itemDetail.status === "Out of Stock") {
          return "itemdetail-details-redstatus";
      }    
  }


  return (

<section className="itemdetail-details">
  <div className="itemdetail-details__header">
        <div className="itemdetail-details__left">
            <Link className="itemdetail-details__back" to="/inventories">
                <img className="" src={backArrow} alt="Back arrow icon"/>
            </Link>
            <h1 className="itemdetail-details__name">{itemDetail.itemName}</h1>
        </div>
        <div className="itemdetail-details__edit-mobile">
            <CTA icon={editIcon} link="/inventories/:inventoryId/edit"/>
        </div>
        <div className="itemdetail-details__edit-tablet-desktop">
            <CTA className="itemdetail-details__CTA" icon={editIcon} text="Edit" link={`/inventories/${inventoryId}/edit`}/>
        </div>
    </div>
    <div className="itemdetail-details__container">
      <div className="itemdetail-details__tablet">
        <div className="itemdetail-details__itemdescription">
          <h4 className="itemdetail-details__label">Item Description</h4>
          <p className="itemdetail-details__info">{itemDetail.description}</p>
        </div>
        <div className="itemdetail-details__category-container">
          <h4 className="itemdetail-details__label">Category</h4>
          <p className="itemdetail-details__info">{itemDetail.category}</p>
        </div>  
     </div>
        <div className="itemdetail-details__tablet-right"> 
          <div className="itemdetail-details__mobile"> 
            <div className="itemdetail-details__status-container">
              <h4 className="itemdetail-details__label status-label">Status</h4>
              <p className={getStatusClass()}>{itemDetail.status}</p>
            </div>
            <div className="itemdetail-details__qty-container">
              <h4 className="itemdetail-details__label">Quantity</h4>
              <p className="itemdetail-details__info">{itemDetail.quantity}</p>
            </div>
          </div>
            <div className="itemdetail-details__warehouse-container">
              <h4 className="itemdetail-details__label">Warehouse</h4>
              <p className="itemdetail-details__info">{itemDetail.warehouseName}</p>
          </div>
        </div>  
    </div>


  </section>


  )
}

export default ItemDetail