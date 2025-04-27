import { useState } from "react";

function useCompare() {
  const [showCompare, setShowComapre] = useState(false);
  const [itemsToCompare, setItemsToCompare] = useState([]);

  return { showCompare, setShowComapre, itemsToCompare, setItemsToCompare };
}

export default useCompare;
