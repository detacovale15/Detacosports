const ModalCompra = ({
  isOpen,
  onClose,
  pedidoData,
  formData,
  onChange,
  onEnviar,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Confirmar Pedido</h2>

        <div className="pedido-resumen">
          <h3>Productos</h3>
          {pedidoData.productos.map((p) => (
            <p key={p.id}>
              {p.nombre} x{p.cantidad} = ${p.precio * p.cantidad}
            </p>
          ))}
          <h3>Total: ${pedidoData.total}</h3>
        </div>

        {/* Formulario del cliente */}
        <h3>Datos del cliente</h3>
        <form>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={onChange}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={onChange}
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={onChange}
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={onChange}
          />
          <input
            type="text"
            name="codigoPostal"
            placeholder="Código Postal"
            value={formData.codigoPostal}
            onChange={onChange}
          />
        </form>

        <div className="modal-actions">
          <button onClick={onEnviar}>Enviar por WhatsApp</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCompra;
