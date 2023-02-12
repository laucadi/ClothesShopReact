import React, { useState } from "react";
//1. importa el createcontext y el json
import { createContext } from "react";
import PRODUCTS from "../shop-data.json";
//2. crea la variable donde se creara el conexto ... que queremos almacenar ?
export const ProductsContext = createContext({
  //queremos almacenar un array de productos
  products: [],
});
//3. crea el provider
export const ProductsProvider = ({ children }) => {
  //4. dentro del value van los values que queremos guardar,
  //el default value en este caso es el json
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
