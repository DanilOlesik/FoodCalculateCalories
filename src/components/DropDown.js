import styles from ".//DropDown.module.css";

function DropDown() {
  return (
    <div className={styles.dropdownInput}>
      <datalist id={"char"}>
        <option value={"Яйцо"}></option>
        <option value={"Молоко"}></option>
        <option value={"Филе курицы"}></option>
      </datalist>
    </div>
  );
}

export default DropDown;
