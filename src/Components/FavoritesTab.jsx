import { useGlobalContext } from "../Contexts/GlobalContext";

function FavoritesTab() {
  const { favorites, setFavorites, showFavorites, setShowFavorites } =
    useGlobalContext();

  return (
    <div
      className={`z-1 fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr] transition duration-300 ease-in-out ${
        showFavorites
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <div className="grid gap-5 p-4">
        <button className="cursor-pointer bg-black text-white">Close</button>
      </div>
      <div>
        <h2 className="p-5 text-white text-2xl">Favorites</h2>
        <div className="p-5">
          <ul className="flex flex-col gap-10 justify-between  text-white p-2 border-b-2 border-slate-700 round">
            {favorites.map((item, i) => (
              <li className="bg-slate-500 p-3" key={i}>
                {item.title}
              </li>
            ))}
            <button className="cursor-pointer py-1 px-3  mx-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-800">
              Remove from favorites
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FavoritesTab;
