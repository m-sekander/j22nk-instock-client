import './CTA.scss';
import { Link } from 'react-router-dom';

function CTA({icon, text, isButton, link}) {
    if (isButton) {
        return (
            <button className="cta cta__button">
                {icon && <img className="cta__icon" src={icon} alt="" />}
                {text}
            </button>
        );
    } else {
        return (
            <Link to={link} className="cta cta__link">
                {icon && <img className="cta__icon" src={icon} alt="" />}
                {text}
            </Link>
        );
    }
}

export default CTA;