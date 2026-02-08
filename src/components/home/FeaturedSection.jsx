import Categories from "../filters/Categories";
import SearchBar from "../filters/SearchBar";
import FeaturedProducts from "../products/FeaturedProducts";

const FeaturedSection = ({ onSearch }) => {
  return (
    <section className="featured-section">
      <div>
        <FeaturedProducts />
        <SearchBar onSearch={onSearch} />
        <Categories />
      </div>
    </section>
  );
};

export default FeaturedSection;
