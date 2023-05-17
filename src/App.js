import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductsActions from "./components/ProductsActions";
import BazaProducts from "./components/BazaProduct";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const addProductHandler = (text) => {
    const newProduct = {
      textBFC: BazaProducts[BazaProducts.state],
      text,
      isComplited: false,
      id: uuidv4(),
    };
    setProducts([...products, newProduct]);
  };
  const deleteProductHandler = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const toggleProductHandler = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isComplited: !product.isComplited }
          : { ...product }
      )
    );
  };
  const resetProductsHandler = () => {
    setProducts([]);
  };

  const deleteComplitedProductsHandler = () => {
    setProducts(products.filter((product) => !product.isComplited));
  };

  const completedProductsCount = products.filter(
    (product) => product.isComplited
  ).length;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Подсчет калорий</h1>
        <ProductForm addProduct={addProductHandler} />
        {!!products.length && (
          <ProductsActions
            completedProductsExist={!!completedProductsCount}
            resetProducts={resetProductsHandler}
            deleteComplitedProducts={deleteComplitedProductsHandler}
          />
        )}

        <ProductList
          products={products}
          deleteProduct={deleteProductHandler}
          toggleProduct={toggleProductHandler}
        />
        {completedProductsCount > 0 && (
          <h2>{`You counted ${completedProductsCount} ${
            completedProductsCount > 1 ? "meals" : "meal"
          }`}</h2>
        )}
      </header>
    </div>
  );
}

export default App;
