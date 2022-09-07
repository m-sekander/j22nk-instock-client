import './CTA.scss';
import { Link } from 'react-router-dom';

function CTA({icon, text, isButton, link, type}) {
    if (isButton) {
        return (
            <button className={`cta cta__button ${type || "primary"}`}>
                {icon && <img className="cta__icon" src={icon} alt="" />}
                <h3 className="cta__text">{text}</h3>
            </button>
        );
    } else {
        return (
            <Link to={link} className={`cta cta__link ${type || "primary"}`}>
                {icon && <img className="cta__icon" src={icon} alt="" />}
                <h3 className={`cta__text ${(type==="secondary") && "cta__text--special"}`}>{text}</h3>
            </Link>
        );
    }
}

export default CTA;