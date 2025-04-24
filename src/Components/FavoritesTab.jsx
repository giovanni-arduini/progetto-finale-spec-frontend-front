import { useGlobalContext } from "../Contexts/GlobalContext";

function FavoritesTab() {
  const { favorites, setFavorites, showFavorites, setShowFavorites } =
    useGlobalContext();

  return (
    <div className={``}>
      <div>
        <button>Close</button>
      </div>
      <div>
        <h2></h2>
        <div>
          <ul>
            {favorites.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
            <button>Remove from favorites</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FavoritesTab;
