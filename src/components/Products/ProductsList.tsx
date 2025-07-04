import styles from "./ProductsList.module.css";
import { ProductItem } from "./ProductItem";
import type { Product } from "../../Interfaces/Product";

interface ProductsListProps {
  products: Product[];
  handleClick: () => void;
}

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  handleClick,
}) => {
  return (
    <div className={styles.productsList}>
      <h2 className={styles.title} hidden={true}>
        Products
      </h2>
      <div className={styles.productsGrid}>
        {products
          .map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))
          .slice(0, 12)}
      </div>
    </div>
  );
};

export default ProductsList;
