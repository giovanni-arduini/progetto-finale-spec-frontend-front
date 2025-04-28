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

  // used in ProductCard to add and remove favorite
  const handleFavorite = (id) => {
    const newFavorite = products.find((p) => p.id === id);
    if (newFavorite && !favorites.some((fav) => fav.id === id)) {
      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    } else {
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
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
