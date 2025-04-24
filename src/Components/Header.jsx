import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Contexts/GlobalContext";
import FavoritesTab from "./FavoritesTab";

export default function Header() {
  const { showFavorites, setShowFavorites } = useGlobalContext();

  const handleShowFavorites = () => {
    !showFavorites ? setShowFavorites(true) : setShowFavorites(false);
  };

  return (
    <header>
      <FavoritesTab />
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <button>Compare products</button>
      </div>

      <div>
        <div onClick={() => handleShowFavorites()}>Favorites</div>
      </div>
    </header>
  );
}
