import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../Contexts/FavoritesContext";
import { useCompareContext } from "../Contexts/CompareContext";
import FavoritesTab from "./FavoritesTab";

export default function Header() {
  const { favorites, setShowFavorites } = useFavoritesContext();

  const { toggleCompare } = useCompareContext();

  const handleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center px-3">
      <FavoritesTab />
      <div>
        <NavLink to={"/"} className={"text-l font-semibold mr-5"}>
          Home
        </NavLink>
        <button onClick={() => toggleCompare()}>Compare products</button>
      </div>

      <div>
        <div
          className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center relative"
          onClick={() => handleShowFavorites()}
        >
          <img className="w-6" src="/images/save.png" alt="Favorites list" />
          <span className="absolute top-3/5 left-3/5 bg-black text-white text-sm w-3 h-3 rounded-full flex justify-center items-center">
            {favorites.length}
          </span>
        </div>
      </div>
    </header>
  );
}
