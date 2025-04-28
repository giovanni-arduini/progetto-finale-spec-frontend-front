import { useState } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  return {
    favorites,
    setFavorites,
    showFavorites,
    setShowFavorites,
  };
}

export default useFavorites;
