import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, cantidad) => {
    setCart((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        // si ya está en el carrito, sumamos la cantidad
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item,
        );
      }
      // si no está, lo agregamos nuevo
      return [...prev, { ...producto, cantidad }];
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
