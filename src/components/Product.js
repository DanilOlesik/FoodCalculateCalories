import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import styles from "./Product.module.css";
import Calculate from "../UI/Calculate";

function Product({ product, deleteProduct, toggleProduct }) {
  return (
    <div
      className={`${styles.product} ${
        product.isComplited ? styles.completedProduct : ""
      }`}
    >
      <RiTodoFill className={styles.productIcon} />
      <div className={styles.productText}>{product.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteProduct(product.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleProduct(product.id)}
      />
      <FaCheckDouble className={styles.checkIcon} onClick={() => Calculate()} />
      {<h3>{`Belok `}</h3>}
    </div>
  );
}

export default Product;
