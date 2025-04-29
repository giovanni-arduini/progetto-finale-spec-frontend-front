import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Contexts/GlobalContext";
import { useFavoritesContext } from "../Contexts/FavoritesContext";

export default function ProductsDetail() {
  const { getProduct } = useGlobalContext();
  const { handleFavorite, favorites } = useFavoritesContext();
  const { id } = useParams();
  const [guitar, setGuitar] = useState();

  useEffect(() => {
    async function getGuitar() {
      try {
        const data = await getProduct(id);
        setGuitar(data.guitar);
      } catch (error) {
        console.error("Error getting guitar data", error);
      }
    }
    getGuitar();
  }, [id]);

  if (!guitar) {
    return <p>Loading...</p>;
  }

  const { title, price, image, category, available, rating } = guitar;

  const itemSpecs = Object.entries(guitar).filter(
    ([key]) =>
      ![
        "title",
        "rating",
        "category",
        "available",
        "image",
        "price",
        "createdAt",
        "updatedAt",
        "id",
      ].includes(key)
  );

  function sanitizeSpec(key) {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .replace(/^./, (c) => c.toUpperCase());
  }

  const stars = Array.from("12345");

  return (
    <>
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="text-orange-300">
        {stars.map((e) => {
          if (e <= Math.round(rating)) {
            return "★";
          }
          return "☆";
        })}
      </p>
      <div className="flex grid grid-cols-5 bg-white rounded-lg">
        <div className="flex justify-center p-4 col-span-3">
          <img className="max-h-100  object-contain" src={image} alt="" />
        </div>
        <div className="flex flex-col grid grid-row-5 grow items-center justify-center col-span-2">
          <div className="row-span-3">
            <p>Price (VAT incuded):</p>
            <p className="font-bold ">
              <span className="text-5xl">{price}</span>
              <span className="text-md">,00</span> €
            </p>
          </div>
          {
            <p
              className={`row-span-1 font-bold text-xl ${
                available ? "text-green-600 " : "text-red-600"
              }`}
            >
              {available ? "Available" : "Currently out of stock"}
            </p>
          }
          <div className="flex flex-col row-span-1 gap-2">
            <button
              className="bg-gray-100 border border-gray-300 rounded-md cursor-pointer"
              onClick={() => handleFavorite(guitar.id)}
            >
              {`${
                favorites.some((fav) => fav.id === guitar.id)
                  ? "Remove from "
                  : "Add to "
              }`}
              <span className="text-red-600">♥︎</span>
            </button>
            <h4>{category} Guitar</h4>
          </div>
        </div>
      </div>
      <div className="max-w-200 mt-4 m-auto">
        {itemSpecs.map(([key, value], index) => (
          <p
            className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200 flex justify-between"
            key={index}
          >
            <span className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {sanitizeSpec(key)}:
            </span>
            <span className="px-6 py-4">{value}</span>
          </p>
        ))}
      </div>
    </>
  );
}
