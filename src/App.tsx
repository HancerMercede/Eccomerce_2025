import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductsList from "./components/Products/ProductsList";
import { useState } from "react";
import { products } from "./data/products";

function App() {
  const [contador, setContador] = useState<number>(0);

  const handleClick = () => {
    console.log("Button clicked!");
    setContador((prev) => prev + 1);
  };
  return (
    <>
      <Navbar contador={contador} />
      <SearchBar
        onSearch={(query) => console.log("Search:", query)}
        placeholder="Search products..."
      />
      <ProductsList products={products} handleClick={handleClick} />
    </>
  );
}

export default App;
