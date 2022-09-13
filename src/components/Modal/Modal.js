import { Link } from 'react-router-dom'
import './Modal.scss'
import closeIcon from '../../assets/images/icons/close-24px.svg'
import CTA from '../CTA/CTA'
import axios from 'axios'

function Modal({isWarehouse, name, id, setDeleteActive, setWarehousesList, setInventoryList, setWarehouseInventory, warehouseId}) {
    function handleReturn(event) {
        setDeleteActive(false);
    }

    const page = isWarehouse ? "warehouses" : "inventories";
    
    function handleDelete() {
        if (isWarehouse) {
            axios.delete(`http://localhost:8080/${page}/${id}`)
            .then((response) => {
                console.log("For devs:", response);
                return axios.get(`http://localhost:8080/${page}`)
            }).then(response => {
                setWarehousesList(response.data);
            }).catch((error) => {
                console.log("For devs:", error);
            });
            setDeleteActive(false);
        } else if (!warehouseId) {
            axios.delete(`http://localhost:8080/${page}/${id}`)
            .then((response) => {
                console.log("For devs:", response);
                return axios.get(`http://localhost:8080/${page}`)
            }).then(response => {
                setInventoryList(response.data);
            }).catch((error) => {
                console.log("For devs:", error);
            });
            setDeleteActive(false);
        } else {
            axios.delete(`http://localhost:8080/${page}/${id}`)
            .then((response) => {
                console.log("For devs:", response);
                return axios.get(`http://localhost:8080/${page}`)
            }).then(response => {
                const inventoriesList = response.data;
                const warehouseInventory = inventoriesList.filter(singleInventoriesList => singleInventoriesList.warehouseID === warehouseId);
                setWarehouseInventory(warehouseInventory);
            }).catch((error) => {
                console.log("For devs:", error);
            });
            setDeleteActive(false);
        }
    }

    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__top">
                    <Link className="modal__close" to={warehouseId ? `/warehouses/${warehouseId}` : `/${page}`}><img className="modal__close" src={closeIcon} alt="close icon" onClick={handleReturn} /></Link>
                    {isWarehouse 
                        ?<h1 className="modal__title">Delete {name} warehouse?</h1>
                        :<h1 className="modal__title">Delete {name} inventory item?</h1>
                    }
                    {isWarehouse 
                        ?<p className="modal__details">Please confirm that you'd like to delete the {name} warehouse from the list of warehouses. You won't be able to undo this action.</p>
                        :<p className="modal__details">Please confirm that you'd like to delete {name} from inventory list. You won't be able to undo this action.</p>
                    }
                </div>
                <div className="modal__bottom">
                    <CTA text="Cancel" link={warehouseId ? `/warehouses/${warehouseId}` : `/${page}`} type="secondary" onClick={handleReturn} />
                    <div className="modal__spacing"></div>
                    <CTA text="Delete" isButton={true} type="delete" onClick={handleDelete} />
                </div>
            </div>
        </div>
    )
}

export default Modal