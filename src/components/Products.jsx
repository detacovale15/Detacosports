import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productService";
import Card from "./Card";
import Loading from "./Loading";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      try {
        const data = await obtenerProductos();
        setProductos(data || []);
      } catch (error) {
        console.error("Error cargando productos:", error);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  if (loading) return <Loading />;

  return (
    <section id="products" className="products-section">
      <h2>Nuestros productos</h2>
      <div className="flex-card">
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
};

export default Products;
