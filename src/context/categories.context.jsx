import React, { useEffect, useState } from "react";
//1. importa el createcontext y el json
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";
//2. crea la variable donde se creara el conexto ... que queremos almacenar ?
export const CategoriesContext = createContext({
  //queremos almacenar un array de productos
  categoriesMap: {},
});
//3. crea el provider
export const CategoriesProvider = ({ children }) => {
  //4. dentro del value van los values que queremos guardar,
  //el default value en este caso es el json
  const [categoriesMap, setcategoriesMap] = useState({});
  const value = { categoriesMap };
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
