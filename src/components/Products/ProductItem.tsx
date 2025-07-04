import { CiShoppingCart } from "react-icons/ci";
import type { Product } from "../../Interfaces/Product";
import styles from "./ProductsList.module.css";

interface ProductCardProps {
  product: Product;
  handleClick: () => void;
}

export const ProductItem: React.FC<ProductCardProps> = ({
  product: ProductProp,
  handleClick,
}) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.currentTarget;
    target.src = `data:image/svg+xml;base64,${btoa(`
      <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" fill="#f0f0f0" stroke="#ddd"/>
        <text x="75" y="75" font-family="Arial" font-size="12" text-anchor="middle" dy=".3em" fill="#999">No Image</text>
      </svg>
    `)}`;
  };

  const AddProductToCard = () => {
    handleClick();
  };

  return (
    <div key={ProductProp.id} className={styles.productCard}>
      <img
        src={ProductProp.image}
        alt={ProductProp.name}
        className={styles.productImage}
        onError={handleImageError}
        loading="lazy"
      />
      <div className={styles.productContent}>
        <h3 className={styles.productName}>{ProductProp.name}</h3>
        <p className={styles.price}>${ProductProp.price.toFixed(2)}</p>
        <p className={styles.description}>{ProductProp.description}</p>
        <div className={styles.addCardButtonContainer}>
          <button className={styles.addCartButton} onClick={AddProductToCard}>
            <CiShoppingCart className={styles.icon} size={20} />
            Add to Car
          </button>
        </div>
      </div>
    </div>
  );
};
