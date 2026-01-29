import Categories from "./Categories";
import SearchBar from "./SearchBar";

const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <div>
        <SearchBar />
        <Categories />
      </div>

      <div>
        <h2>Productos destacados</h2>
      </div>
    </section>
  );
};

export default FeaturedSection;
