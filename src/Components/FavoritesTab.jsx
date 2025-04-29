import { useFavoritesContext } from "../Contexts/FavoritesContext";
import SideTab from "./SideTab";

function FavoritesTab() {
  const { favorites, showFavorites, setShowFavorites, removeFromFavorites } =
    useFavoritesContext();

  return (
    <SideTab
      title={"Favorites"}
      content={
        favorites.length > 0 ? (
          favorites.map((item, i) => (
            <div className="bg-slate-500 p-3" key={i}>
              {item.title}
              <button
                className="cursor-pointer py-1 px-3  mx-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-800"
                onClick={() => removeFromFavorites(item)}
              >
                Remove from favorites
              </button>
            </div>
          ))
        ) : (
          <p>No added favorites</p>
        )
      }
      onClose={() => setShowFavorites(false)}
      show={showFavorites}
    />
  );
}

export default FavoritesTab;
