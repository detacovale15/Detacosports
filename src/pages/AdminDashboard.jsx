import { useEffect, useState } from "react";
import {
  crearProducto,
  obtenerProductos,
  eliminarProducto,
  actualizarProducto,
} from "../services/productService";
import AdminProducts from "../components/products/AdminProducts";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import ModalProducts from "../components/common/ModalProducts";

const AdminDashboard = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      try {
        const data = await obtenerProductos();
        setAllProducts(data || []);
        setFilteredProducts(data || []);
      } catch (error) {
        console.error("Error cargando productos:", error);
        setAllProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtrados = allProducts.filter((p) =>
      p.nombre.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredProducts(filtrados);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Eliminar este producto?")) return;
    try {
      await eliminarProducto(id);
      const nuevos = allProducts.filter((p) => p.id !== id);
      setAllProducts(nuevos);
      setFilteredProducts(
        nuevos.filter((p) =>
          p.nombre.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  const handleAgregar = () => {
    setProductoEditando(null);
    setIsModalOpen(true);
  };

  const handleEditar = (product) => {
    setProductoEditando(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProductoEditando(null);
  };

  const handleGuardar = async (data, imagen, id) => {
    try {
      if (id) {
        await actualizarProducto(id, data);
      } else {
        // crearProducto lo tenés que importar del service
        await crearProducto(data, imagen);
      }
      const nuevos = await obtenerProductos();
      setAllProducts(nuevos || []);
      setFilteredProducts(nuevos || []);
      handleCloseModal();
    } catch (error) {
      console.error("Error guardando producto:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="line">
        <Button
          type="button"
          texto="Agregar producto"
          className="btn"
          onClick={() => handleAgregar()}
        />
        <Input
          type="text"
          placeholder="Buscar productos"
          value={query}
          onChange={handleSearch}
        />
      </div>

      <AdminProducts
        products={filteredProducts}
        loading={loading}
        onEliminar={handleEliminar}
        onEditar={handleEditar}
      />

      <ModalProducts
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        producto={productoEditando}
        onGuardar={handleGuardar}
      />
    </div>
  );
};

export default AdminDashboard;
