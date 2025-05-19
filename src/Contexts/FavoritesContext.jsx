import { createContext, useContext } from "react";
import useFavorites from "../Hooks/useFavorites";
import { useGlobalContext } from "./GlobalContext";

const FavoritesContext = createContext();

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const { products } = useGlobalContext();

  const { favorites, setFavorites, showFavorites, setShowFavorites } =
    useFavorites();

  // used in Header to toggle FavBar
  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  // used in FavoritesTab to remove item
  const removeFromFavorites = (item) => {
    setFavorites((curr) => curr.filter((p) => p.id !== item.id));
  };

  // used in ProductCard and ProductDetail to add and remove favorite
  const handleFavorite = (id) => {
    const newFavorite = products.find((p) => p.id === id);
    if (newFavorite && !favorites.some((fav) => fav.id === id)) {
      // Animation effets on favorites icon
      const favIcon = document.getElementById("favIcon");
      favIcon.classList.add("add-animation");
      setTimeout(function () {
        favIcon.classList.remove("add-animation");
      }, 1000);

      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    } else {
      const favCounter = document.getElementById("favCounter");
      favCounter.classList.add("delete-animation");
      setTimeout(function () {
        favCounter.classList.remove("delete-animation");
      }, 1000);
      setFavorites((prevFavorites) => prevFavorites.filter((p) => p.id !== id));
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        showFavorites,
        setShowFavorites,
        handleFavorite,
        toggleFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
