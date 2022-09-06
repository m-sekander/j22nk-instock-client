import "./Header.scss";
import logo from "../../assets/images/logos/InStock-Logo_2x.png"

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="instock" />
        </header>
    );
}

export default Header;