import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import Swal from "sweetalert2";

const SearchBar = ({ onSearch }) => {
  const [product, setProduct] = useState("");

  const handleSearch = () => {
    onSearch(product);
  };

  return (
    <div className="search">
      <Input
        type="text"
        name="city"
        placeholder="Buscar producto"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(product)}
      />

      <Button
        type="button"
        className="search-btn"
        texto="Buscar"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
