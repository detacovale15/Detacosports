import ProductRow from "./ProductRow";

const ProductsTable = ({ products, onEliminar, onEditar }) => {
  if (products.length === 0) {
    return <p>No tenés productos cargados</p>;
  }

  return (
    <table className="tabla-producto">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onEliminar={onEliminar}
            onEditar={onEditar}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
