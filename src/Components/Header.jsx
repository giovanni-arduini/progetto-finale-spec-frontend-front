import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Contexts/GlobalContext";
import FavoritesTab from "./FavoritesTab";

export default function Header() {
  const { showFavorites, setShowFavorites } = useGlobalContext();

  const handleShowFavorites = () => {
    !showFavorites ? setShowFavorites(true) : setShowFavorites(false);
  };

  return (
    <header className="flex justify-between items-center px-3">
      <FavoritesTab />
      <div>
        <NavLink to={"/"} className={"text-l font-semibold"}>
          Home
        </NavLink>
        <button>Compare products</button>
      </div>

      <div>
        <div
          className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center relative"
          onClick={() => handleShowFavorites()}
        >
          Favorites
        </div>
      </div>
    </header>
  );
}
