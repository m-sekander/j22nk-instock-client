import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import chevronIcon from "../../assets/images/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Modal from "../Modal/Modal";

function WarehouseListItem({ id, name, address, city, country, contactName, contactPhone, contactEmail}) {
    const [deleteActive, setDeleteActive] = useState(false);

    return (
        <>
            <li className="warehouse">
                <div className="warehouse__container warehouse__container-warehouse">
                    <h4 className="warehouse__label">Warehouse</h4>
                    <Link to={"/warehouses/" + id} className="warehouse__link">
                        <p className="warehouse__name warehouse__info">
                            {name}
                            <img className="warehouse__chevron" src={chevronIcon} alt="Chevron icon"/>
                        </p>
                    </Link>
                </div>
                <div className="warehouse__container warehouse__container-contact-name">
                    <h4 className="warehouse__label">Contact Name</h4>
                    <p className="warehouse__contact-name warehouse__info">{contactName}</p>
                </div>
                <div className="warehouse__container warehouse__container-address">
                    <h4 className="warehouse__label">Address</h4>
                    <p className="warehouse__address warehouse__info">{address}, {city}, {country}</p>
                </div>
                <div className="warehouse__container warehouse__container-contact-info">
                    <h4 className="warehouse__label">Contact Information</h4>
                    <p className="warehouse__contact-phone warehouse__info">{contactPhone}</p>
                    <p className="warehouse__contact-email warehouse__info">{contactEmail}</p>
                </div>
                <div className="warehouse__container">
                    <img className="warehouse__delete" src={deleteIcon} alt="Delete button" onClick={() => setDeleteActive(true)} />
                    <Link to={`/warehouses/${id}/edit`} className="warehouse__edit-link"><img className="warehouse__edit" src={editIcon} alt="Edit button" /></Link>
                </div>
            </li>
            {deleteActive && <Modal isWarehouse={true} name={name} id={id} setDeleteActive={setDeleteActive}/>}
        </>
    );
}

export default WarehouseListItem;

