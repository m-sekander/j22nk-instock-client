import "./Header.scss";
import logo from "../../assets/images/logos/InStock-Logo_2x.png"
import { Link } from 'react-router-dom';

function Header() {


    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__logo-link"><img className="header__logo" src={logo} alt="instock" /></Link>
                <ul className="header__nav">
                    <li className="header__nav-item">
                            Warehouses
                    </li>
                    <li className="header__nav-item">
                            Inventory
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;