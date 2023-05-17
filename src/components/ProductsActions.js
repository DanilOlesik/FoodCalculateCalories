import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./ProductsActions.module.css";

function ProductsActions({
  resetProducts,
  deleteComplitedProducts,
  completedProductsExist,
}) {
  return (
    <div className={styles.productsActionsContainer}>
      <Button title="Reset Products" onClick={resetProducts}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteComplitedProducts}
        disable={!completedProductsExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default ProductsActions;
