import Loading from "../common/Loading";
import ProductsTable from "./ProductsTable";

const AdminProducts = ({ products, loading, onEliminar, onEditar }) => {
  if (loading) return <Loading />;

  return (
    <div className="admin-products">
      <div className="header">
        <h2>Mis Productos</h2>
      </div>

      {products.length === 0 ? (
        <p>No hay productos para mostrar.</p>
      ) : (
        <ProductsTable
          products={products}
          onEliminar={onEliminar}
          onEditar={onEditar}
        />
      )}
    </div>
  );
};

export default AdminProducts;
