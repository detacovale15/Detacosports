import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import Products from "../components/home/Products";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <HeroSection />
      <FeaturedSection onSearch={setSearchText} />
      <Products searchText={searchText} />
    </>
  );
};

export default Home;
