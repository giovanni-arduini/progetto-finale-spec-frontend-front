import { useNavigate } from "react-router-dom";
import { useFavoritesContext } from "../Contexts/FavoritesContext";
import { useCompareContext } from "../Contexts/CompareContext";

function ProductCard({ product }) {
  const { id, title, category } = product;

  const { favorites, handleFavorite } = useFavoritesContext();
  const { compareItem } = useCompareContext();

  const navigate = useNavigate();

  const toDetail = (id) => {
    navigate(`/guitars/${id}`);
  };

  return (
    <div className="bg-white rounded-xl p-5 box-shadow-sm flex flex-col">
      <div className="cursor-pointer mb-2 grow" onClick={() => toDetail(id)}>
        <h2 className="text-lg py-3 text-center font-md">{title}</h2>
        <p>{category}</p>
      </div>
      <div className="flex justify-around ">
        <button
          className="cursor-pointer text-red-700"
          onClick={() => handleFavorite(id)}
        >
          {favorites.some((fav) => fav.id === id) ? "♥︎" : "♡"}
        </button>
        <button className="cursor-pointer" onClick={() => compareItem(id)}>
          ⇄
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
