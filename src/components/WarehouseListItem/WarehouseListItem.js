import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import chevronIcon from "../../assets/images/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

function WarehouseListItem({ id, name, address, city, country, contactName, contactPhone, contactEmail}) {
    return (
        <li className="warehouse">
            <div className="warehouse__left">
                <div className="warehouse__container">
                    <span className="warehouse__label">Warehouse</span>
                    <Link to="" className="warehouse__link">
                        <span className="warehouse__name warehouse__info">
                            {name}
                            <img className="warehouse__chevron" src={chevronIcon} alt="Chevron icon"/>
                        </span>
                    </Link>
                </div>
                <div className="warehouse__container">
                    <span className="warehouse__label">Address</span>
                    <span className="warehouse__address warehouse__info">{address}, {city}, {country}</span>
                </div>
                <img className="warehouse__delete" src={deleteIcon} alt="Delete button" />
            </div>
            <div className="warehouse__right">
                <div className="warehouse__container">
                    <span className="warehouse__label">Contact Name</span>
                    <span className="warehouse__contact-name warehouse__info">{contactName}</span>
                </div>
                <div className="warehouse__container">
                    <span className="warehouse__label">Contact Information</span>
                    <span className="warehouse__contact-phone warehouse__info">{contactPhone}</span>
                    <span className="warehouse__contact-email warehouse__info">{contactEmail}</span>
                </div>
                <img className="warehouse__edit" src={editIcon} alt="Edit button" />

            </div>
        </li>
    );
}

export default WarehouseListItem;

