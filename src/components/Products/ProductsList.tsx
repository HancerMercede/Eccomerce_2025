import styles from "./ProductsList.module.css";
import { ProductItem } from "./ProductItem";
import type { Product } from "../../Interfaces/Product";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

interface ProductsListProps {
  products: Product[];
  handleClick: () => void;
}

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  handleClick,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);
  console.log(products.length);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.productsList}>
      <h2 className={styles.title} hidden={true}>
        Products
      </h2>
      <div className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsList;
