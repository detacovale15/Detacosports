import { Icon } from "@iconify/react";
import Button from "../common/Button";

const ProductActions = ({ product, onEliminar, onEditar }) => {
  return (
    <div className="acciones">
      <Button
        type="button"
        texto=""
        className="btn-icono"
        onClick={() => onEditar(product)}
        title="Editar"
        icono={<Icon icon="mdi:pencil" />}
      />
      <Button
        type="button"
        texto=""
        className="btn-icono"
        onClick={() => onEliminar(product.id)}
        title="Eliminar"
        icono={<Icon icon="mdi:delete" />}
      />
    </div>
  );
};

export default ProductActions;
