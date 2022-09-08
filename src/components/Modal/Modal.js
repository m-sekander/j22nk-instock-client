import { Link } from 'react-router-dom'
import './Modal.scss'
import closeIcon from '../../assets/images/icons/close-24px.svg'
import CTA from '../CTA/CTA'

function Modal({isWarehouse, name, id}) {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__top">
                    <Link className="modal__close" to="/warehouses"><img className="modal__close" src={closeIcon} alt="close icon" /></Link>
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
                    <CTA text="Cancel" link={"/warehouses"} type="secondary" />
                    <div className="modal__spacing"></div>
                    <CTA text="Delete" isButton={true} type="delete" />
                </div>
            </div>
        </div>
    )
}

export default Modal