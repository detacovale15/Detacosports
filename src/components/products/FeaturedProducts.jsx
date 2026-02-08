import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SlideCard from "../common/SlideCard";
import { obtenerDestacados } from "../../services/productService";
import { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const cargarDestacados = async () => {
      try {
        const data = await obtenerDestacados();
        setSlides(data);
      } catch (error) {
        console.error("Error cargando destacados:", error);
      }
    };
    cargarDestacados();
  }, []);

  return (
    <div className="featured-cards">
      <h2 className="section-title">Productos Destacados</h2>
      <div className="slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SlideCard producto={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
