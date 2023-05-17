import { useState } from "react";
import styles from "./ProductForm.module.css";
import Button from "../UI/Button";
import DropDown from "./DropDown";

function ProductForm({ addProduct }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addProduct(text);
    setText("");
  };

  return (
    <div className={styles.productFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <DropDown />
        <input
          list={"char"}
          placeholder="Введите продукт"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button type="submit" title="Submit">
          Добавить
        </Button>
      </form>
    </div>
  );
}

export default ProductForm;
