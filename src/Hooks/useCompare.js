import { useState } from "react";

function useCompare() {
  const [showCompare, setShowCompare] = useState(false);
  const [itemsToCompare, setItemsToCompare] = useState([]);

  return { showCompare, setShowCompare, itemsToCompare, setItemsToCompare };
}

export default useCompare;
