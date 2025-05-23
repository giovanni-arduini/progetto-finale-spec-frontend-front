import { useNavigate } from "react-router-dom";
import { useFavoritesContext } from "../Contexts/FavoritesContext";
import { useCompareContext } from "../Contexts/CompareContext";

function ProductCard({ product }) {
  const { id, title, category } = product;

  const { favorites, handleFavorite } = useFavoritesContext();
  const { compareItem, itemsToCompare } = useCompareContext();

  const navigate = useNavigate();

  const toDetail = (id) => {
    navigate(`/guitars/${id}`);
  };

  return (
    <div className="bg-white rounded-xl p-5 box-shadow-sm flex flex-col hover:scale-105 transition duration-250 ease-in-out shadow-md">
      <div className="cursor-pointer mb-2 grow" onClick={() => toDetail(id)}>
        <h2 className="text-lg py-3  font-md">{title}</h2>
        <p>{category}</p>
      </div>
      <div className="flex justify-around ">
        <button
          className="cursor-pointer text-red-700"
          onClick={() => handleFavorite(id)}
        >
          {favorites.some((fav) => fav.id === id) ? "♥︎" : "♡"}
        </button>
        <button
          className={`cursor-pointer rounded-md p-2 ${
            itemsToCompare.some((i) => i.id === id)
              ? "bg-slate-300"
              : "bg-gray-100"
          } border border-gray-300 `}
          onClick={() => compareItem(id)}
        >
          ⇄
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
