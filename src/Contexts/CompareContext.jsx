import { createContext, useContext, useEffect } from "react";
import { useGlobalContext } from "./GlobalContext";
import useCompare from "../Hooks/useCompare";

const CompareContext = createContext();

export function useCompareContext() {
  return useContext(CompareContext);
}

export function CompareProvider({ children }) {
  const { getProduct } = useGlobalContext();
  const { showCompare, setShowCompare, itemsToCompare, setItemsToCompare } =
    useCompare();

  async function getItem(id) {
    const data = await getProduct(id);
    return data.guitar;
  }

  const compareItem = async (id) => {
    if (!itemsToCompare.some((item) => item.id === id))
      if (itemsToCompare.length < 3) {
        const item = await getItem(id);
        setItemsToCompare((prevItems) => [...prevItems, item]);
      } else {
        const item = await getItem(id);
        setItemsToCompare((prevItems) => [prevItems[1], item]);
      }
    else {
      setItemsToCompare((prevItems) => prevItems.filter((p) => p.id !== id));
    }
  };

  // Used in Header, CompareTab
  function closeCompare() {
    setShowCompare(false);
  }

  // Used in Header
  function toggleCompare() {
    showCompare ? setShowCompare(false) : setShowCompare(true);
  }

  useEffect(() => {
    itemsToCompare.length < 1 ? setShowCompare(false) : setShowCompare(true);
  }, [itemsToCompare]);

  return (
    <CompareContext.Provider
      value={{
        showCompare,
        itemsToCompare,
        compareItem,
        closeCompare,
        toggleCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}
