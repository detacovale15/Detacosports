import banner from "../../../public/banner.png";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h2 className="hero-title">Equipamiento Profesional</h2>
            <h4 className="hero-description">
              Encontrá todo lo que necesitás para tu mejor desempeño
            </h4>
            <Button texto="Ver Productos" to="#products" className="btn" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
