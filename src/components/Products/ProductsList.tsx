import React from "react";
import { products } from "../../data/products";
import styles from "./ProductsList.module.css";

interface ProductsListProps {}
// types.ts

const ProductsList: React.FC<ProductsListProps> = () => {
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

  return (
    <div className={styles.productsList}>
      <h2 className={styles.title} hidden={true}>
        Products
      </h2>
      <div className={styles.productsGrid}>
        {products
          .map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
                onError={handleImageError}
                loading="lazy"
              />
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <p className={styles.description}>{product.description}</p>
              </div>
            </div>
          ))
          .slice(0, 12)}
      </div>
    </div>
  );
};

export default ProductsList;
