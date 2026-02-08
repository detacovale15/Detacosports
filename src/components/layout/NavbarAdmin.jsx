import Logo from "../../assets/Logo.jsx";
import Button from "../common/Button.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const NavbarAdmin = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="navbar-button">
        <Button texto="Cerrar Sesión" onClick={handleLogout} className="btn" />
      </div>
    </div>
  );
};

export default NavbarAdmin;
