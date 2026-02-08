import ProductActions from "./ProductActions";

const ProductRow = ({ product, onEliminar, onEditar }) => {
  return (
    <tr>
      <td>
        {product.imagen ? (
          <img
            src={product.imagen}
            alt={product.nombre}
            className="product-thumbnail"
            style={{
              width: "80px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        ) : (
          "Sin imagen"
        )}
      </td>
      <td>{product.nombre}</td>
      <td>{product.marca}</td>
      <td>$ {product.precio}</td>
      <td>{product.stock}</td>
      <td>
        <span className={`badge ${product.estado === "activo" ? "ok" : "off"}`}>
          {product.estado === "activo" ? "Activo" : "Inactivo"}
        </span>
      </td>
      <td>
        <ProductActions
          product={product}
          onEliminar={onEliminar}
          onEditar={onEditar}
        />
      </td>
    </tr>
  );
};

export default ProductRow;
