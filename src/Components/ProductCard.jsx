import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Contexts/GlobalContext";

function ProductCard({ product }) {
  const { id, title, category } = product;

  const navigate = useNavigate();

  const toDetail = (id) => {
    navigate(`/guitars/${id}`);
  };

  return (
    <div>
      <div onClick={() => toDetail(id)}>
        <h2>{title}</h2>
        <p>{category}</p>
      </div>
      <div>
        <button>♥︎</button>
        <button>⇄</button>
      </div>
    </div>
  );
}

export default ProductCard;
