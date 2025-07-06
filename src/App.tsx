import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductsList from "./components/Products/ProductsList";
import { useCallback, useState } from "react";
import { products } from "./data/products";
import Footer from "./components/Footer/Footer";
import type { Product } from "./Interfaces/Product";

function App() {
  const [contador, setContador] = useState<number>(0);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleClick = () => {
    setContador((prev) => prev + 1);
  };

  const handleSearchProduct = useCallback((query: string) => {
    console.log(query);
    if (!query) {
      setFilteredProducts(products);
      return;
    }
    const filter = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filter);
  }, []);
  return (
    <>
      <Navbar contador={contador} />
      <SearchBar
        onSearch={handleSearchProduct}
        placeholder="Search products..."
      />
      <ProductsList products={filteredProducts} handleClick={handleClick} />
      <Footer />
    </>
  );
}

export default App;
