import { createContext, useContext } from "react";
import useGuitars from "../Hooks/useGuitars";

const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const { products, setProducts, getProduct } = useGuitars();

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        getProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
