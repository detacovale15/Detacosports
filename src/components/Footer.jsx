import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/">
          <h4>Inicio</h4>
        </Link>
        <Link to="/#">
          <h4>Cómo comprar</h4>
        </Link>
      </div>
      <p>The Council - &copy; Todos los derechos reservados 2026</p>
    </div>
  );
};

export default Footer;
