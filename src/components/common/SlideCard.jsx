const SlideCard = ({ producto }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="card-description">
          <h4>{producto.nombre}</h4>
          <p className="marca">{producto.marca}</p>
          <p>$ {producto.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
