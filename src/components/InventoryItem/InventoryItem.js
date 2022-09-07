import "./InventoryItem.scss";

function InventoryItem({ item }) {

    const getStatusClass = () => {
        if (item.status === "IN STOCK") {
            return "InventoryItem__greenstatus";
        }
        if (item.status === "OUTSTOCK") {
            return "InventoryItem__redstatus";
        }    

    }
  return (
    <div>
      <div style={{display: "flex"}}>
        <div>
          <h4>{item.itemName}</h4>
          <h4>{item.category}</h4>
        </div>
        <div>
          <h4 className={getStatusClass()}>{item.status}</h4>
          <h4>{item.quantity}</h4>
          <h4>{item.warehouseName}</h4>
        </div>
      </div>
      <div style={{display: "flex" , justifyContent: "space-between"}}>
        <button>X</button>
        <button>O</button>
      </div>
    </div>
  );
}

export default InventoryItem;
