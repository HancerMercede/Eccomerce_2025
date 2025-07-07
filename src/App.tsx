import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductsList from "./components/Products/ProductsList";
import { useCallback, useState } from "react";
import { products } from "./data/products";
import Footer from "./components/Footer/Footer";
import type { Product } from "./Interfaces/Product";
import type { CartItem } from "./Interfaces/CartItem";

function App() {
  const [carro, setCarro] = useState<CartItem[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleClick = () => {
    console.log("clicking");
  };

  const addProductToCart = (product: Product) => {
    setCarro((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Mapear y actualizar cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Agregar nuevo producto al carrito con cantidad inicial 1
        const nuevoItem: CartItem = { ...product, quantity: 1 };
        return [...prevCart, nuevoItem];
      }
    });
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
      <Navbar cart={carro} />

      <SearchBar
        onSearch={handleSearchProduct}
        placeholder="Search products..."
      />
      <ProductsList
        products={filteredProducts}
        handleClick={handleClick}
        handleAddCartItem={addProductToCart}
      />
      <Footer />
    </>
  );
}

export default App;
