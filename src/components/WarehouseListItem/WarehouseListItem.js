import "./WarehouseListItem.scss"

function WarehouseListItem({ id, name, address, city, country, contactName, contactPhone, contactEmail}) {
    return (
        <li>
            <div>
                <span>Warehouse</span>
                <span>{name} > </span>
            </div>
            <div>
                <span>Address</span>
                <span>{address}</span>
                <span>{city}, {country}</span>
            </div>
            <div>
                <span>Contact Name</span>
                <span>{contactName}</span>
            </div>
            <div>
                <span>Contact Information</span>
                <span>{contactPhone}</span>
                <span>{contactEmail}</span>
            </div>
        </li>
    );
}

export default WarehouseListItem;

