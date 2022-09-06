import "./Header.scss";
import logo from "../../assets/images/logos/InStock-Logo_2x.png"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__logo-link"><img className="header__logo" src={logo} alt="instock" /></Link>
                <div className="header__nav">
                    <span className="header__nav-item">Warehouses</span>
                    <span className="header__nav-item">Inventory</span>
                </div>
            </div>
        </header>
    );
}

export default Header;