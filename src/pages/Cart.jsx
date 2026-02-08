import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ModalCompra from "../components/common/ModalCompra";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  });

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );

  const pedidoData = {
    productos: cart,
    total,
    fecha: new Date().toISOString(),
    estado: "pendiente",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnviar = () => {
    const mensaje = `Cliente: ${formData.nombre}
Teléfono: ${formData.telefono}
Email: ${formData.email}
Dirección: ${formData.direccion}, ${formData.ciudad} (${formData.codigoPostal})

Productos:
${pedidoData.productos.map((p) => `- ${p.nombre} x${p.cantidad} ($${p.precio * p.cantidad})`).join("\n")}

Total: $${pedidoData.total}
Fecha: ${new Date(pedidoData.fecha).toLocaleString()}
`;

    const url = `https://wa.me/5493854409589?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad ?? 1}</p>
          <p>Precio: ${item.precio ?? 0}</p>
          <p>Marca: {item.marca ?? "Sin marca"}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>

      <button onClick={() => setIsModalOpen(true)}>Comprar</button>
      <button onClick={clearCart}>Vaciar carrito</button>

      <ModalCompra
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pedidoData={pedidoData}
        formData={formData}
        onChange={handleChange}
        onEnviar={handleEnviar}
      />
    </div>
  );
};

export default Cart;
