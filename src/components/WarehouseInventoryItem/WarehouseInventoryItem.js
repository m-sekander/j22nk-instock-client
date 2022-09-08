import "./WarehouseInventory.scss";

function WarehouseInventoryItem({ inventory }) {
    return (
        <div>
            {inventory.map(inventoryItem => (
                <div className="inventory-list-item">
                    <div className="inventory-list-item__item">
                        <h4 className="inventory-list-item__label">Inventory Item</h4>
                        <p className="inventory-list-item__info">{inventoryItem.itemName}</p>
                    </div>
                    <div className="inventory-list-item__item">
                        <h4 className="inventory-list-item__label">Status</h4>
                        <p className="inventory-list-item__info">{inventoryItem.status}</p>
                    </div>
                    <div className="inventory-list-item__item">
                        <h4 className="inventory-list-item__label">Category</h4>
                        <p className="inventory-list-item__info">{inventoryItem.category}</p>
                    </div>
                    <div className="inventory-list-item__item">
                        <h4 className="inventory-list-item__label">Qty</h4>
                        <p className="inventory-list-item__info">{inventoryItem.quantity}</p>
                    </div>
                </div>
            )) 
            }
        </div>
    );
}

export default WarehouseInventoryItem;