import { createContext, useContext } from "react";
import useGuitars from "../Hooks/useGuitars";

const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const { products, setProducts, getProduct } = useGuitars();

  const categories = products.reduce((prev, prod) => {
    if (prev.includes(prod.category)) {
      return [...prev];
    }
    return [...prev, prod.category];
  }, []);
  console.log(categories);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        getProduct,
        categories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
