import { createContext, useContext, useEffect } from "react";
import { useGlobalContext } from "./GlobalContext";

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
    if (
      !itemsToCompare.some((item) => item.id === id) &&
      itemsToCompare.length < 2
    ) {
      const item = await getItem(id);
      setItemsToCompare((prevItems) => [...prevItems, item]);
    } else if (itemsToCompare.some((item) => item.id === id)) {
      setItemsToCompare((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );
    }
  };

  function closeCompare() {
    setShowCompare(false);
  }

  function toggleCompare() {
    showCompare ? setShowCompare(false) : setShowCompare(true);
  }

  useEffect(() => {
    itemsToCompare.length < 1 ? setShowCompare(false) : setShowCompare(true);
  }, [itemsToCompare]);

  return (
    <CompareContext.Provider value={{ compareItem }}>
      {children}
    </CompareContext.Provider>
  );
}
