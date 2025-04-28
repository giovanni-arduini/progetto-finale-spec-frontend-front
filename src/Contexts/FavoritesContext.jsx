import { createContext, useContext } from "react";
const FavoritesContext = createContext();

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
}
