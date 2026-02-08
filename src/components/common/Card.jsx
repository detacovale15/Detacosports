import { useState, useContext } from "react";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { CartContext } from "../../context/CartContext";

const Card = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  const aumentar = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregar = () => {
    addToCart(producto, cantidad);
    setCantidad(1);
  };

  return (
    <div className="card">
      <div className="card-content">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="card-description">
          <h4>{producto.nombre}</h4>
          <p className="marca">{producto.marca}</p>
          <p>$ {producto.precio}</p>
        </div>
        <div className="counter">
          <div className="btnAdd" onClick={disminuir}>
            <Icon
              icon="fluent:line-horizontal-1-16-filled"
              width="20"
              height="20"
            />
          </div>
          <span className="box">{cantidad}</span>
          <div className="btnAdd" onClick={aumentar}>
            <Icon icon="fluent:add-12-filled" width="20" height="20" />
          </div>
        </div>

        <Button texto="Agregar" className="btn" onClick={handleAgregar} />
      </div>
    </div>
  );
};

export default Card;
