import { Link } from 'react-router-dom'
import './Modal.scss'
import closeIcon from '../../assets/images/icons/close-24px.svg'
import CTA from '../Button/CTA'

function Modal() {
    return (
        <div>
            <Link to="/warehouses"><img src={closeIcon} alt="close icon" /></Link>
            <h1>Delete Washington warehouse?</h1>
            <p>Please confirm that you'd like to delete the Washington warehouse from the list of warehouses. You won't be able to undo this action.</p>
            {/* <CTA text="Cancel" link={"/warehouses"}></CTA> */}
            <CTA text="Delete" isButton={true}></CTA>
        </div>
    )
}

export default Modal