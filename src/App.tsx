import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductsList from "./components/Products/ProductsList";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar
        onSearch={(query) => console.log("Search:", query)}
        placeholder="Search products..."
      />
      <ProductsList />
    </>
  );
}

export default App;
