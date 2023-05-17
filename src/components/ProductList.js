import Product from "./Product";
import styles from "./ProductList.module.css";
import Calculate from "../UI/Calculate";

function ProductList({ products, deleteProduct, toggleProduct }) {
  return (
    <div className={styles.productListContainer}>
      <Calculate />
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
