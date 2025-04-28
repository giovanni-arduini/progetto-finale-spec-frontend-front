import { createContext, useContext } from "react";
import useFavorites from "../Hooks/useFavorites";

const FavoritesContext = createContext();

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const { favorites, setFavorites, showFavorites, setShowFavorites } =
    useFavorites();

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, showFavorites, setShowFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
