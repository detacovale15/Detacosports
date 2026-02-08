import Logo from "../../assets/Logo.jsx";
import Button from "../common/Button.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="navbar-button">
        <Button texto="Carrito" to="/cart" className="btn" />
      </div>
    </div>
  );
};

export default Navbar;
