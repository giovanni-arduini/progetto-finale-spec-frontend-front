import { useState, useEffect } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("storedFavorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem("storedFavorites", JSON.stringify(favorites));
  }, [favorites]);

  return {
    favorites,
    setFavorites,
    showFavorites,
    setShowFavorites,
  };
}

export default useFavorites;
