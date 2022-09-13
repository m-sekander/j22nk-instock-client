import "./ItemDetail.scss";
import CTA from '../CTA/CTA'
import axios from 'axios';
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";

const BASE_URL = "http://localhost:8080";

function ItemDetail() {
    const { inventoryId } =useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const params = useParams();

    useEffect(() => {
        window.scroll({
            top: 0,
            right: 0,
            behavior: "smooth"
          });
        axios.get(`${BASE_URL}/inventories/${params.inventoryId}`)
          .then(response => {
            const data = response.data;
            setItemDetail(data);
          })
          .catch(error => {
            console.error(error);
            setNotFound(true);
          })
        }, [params]);

    if (notFound) {
      return <NotFound />
    }

    if (itemDetail === null) {
      return <Loading />
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
                <CTA icon={editIcon} text="Edit" link={`/inventories/${inventoryId}/edit`}/>
            </div>
        </div>
        <div className="itemdetail-details__container">
            <h4>Item Description</h4>
            <p>{itemDetail.description}</p>
            <h4>Category</h4>
            <p>{itemDetail.category}</p>
            <p>{itemDetail.status}</p>
            <h4>Quantity</h4>
            <p>{itemDetail.quantity}</p>
            <h4>Warehouse</h4>
            <p>{itemDetail.warehouseName}</p>
        </div>
      </section>
  )
}

export default ItemDetail