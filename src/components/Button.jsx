import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  texto,
  to,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  if (to?.startsWith("#")) {
    return (
      <a href={to} className={className}>
        <span>{texto}</span>
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        <span>{texto}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      <span>{texto}</span>
    </button>
  );
};

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;
