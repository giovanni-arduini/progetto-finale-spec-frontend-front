import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Contexts/GlobalContext";
import FavoritesTab from "./FavoritesTab";

export default function Header() {
  const { favorites, setFavorites, showFavorites, setShowFavorites } =
    useGlobalContext();

  const handleShowFavorites = () => {
    !showFavorites ? setShowFavorites(true) : setShowFavorites(false);
  };

  return (
    <header className="flex justify-between items-center px-3">
      <FavoritesTab />
      <div>
        <NavLink to={"/"} className={"text-l font-semibold mr-5"}>
          Home
        </NavLink>
        <button>Compare products</button>
      </div>

      <div>
        <div
          className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center relative"
          onClick={() => handleShowFavorites()}
        >
          <img className="w-6" src="../public/images/save.png" alt="" />
          <span className="absolute top-2/3 left-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
            {favorites.reduce((acc, curr) => acc + curr.quantity, 0)}
          </span>
        </div>
      </div>
    </header>
  );
}
