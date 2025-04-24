import { createContext, useContext, useState } from "react";
import useGuitars from "../Hooks/useGuitars";

const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const { products, setProducts, getProduct } = useGuitars();

  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        getProduct,
        favorites,
        setFavorites,
        showFavorites,
        setShowFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
