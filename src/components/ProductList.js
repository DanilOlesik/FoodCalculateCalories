import Product from "./Product";
import styles from "./ProductList.module.css";

function ProductList({ products, deleteProduct, toggleProduct, calc }) {
  return (
    <div className={styles.productListContainer}>
      {!products.length && <h2>Список продуктов</h2>}

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          toggleProduct={toggleProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
