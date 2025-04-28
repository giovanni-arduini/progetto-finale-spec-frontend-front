import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Contexts/GlobalContext";

export default function ProductsDetail() {
  const { getProduct } = useGlobalContext();
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
  }, []);

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
        <div className="flex flex-col grow items-center justify-center col-span-2">
          <p className="font-bold text-lg">Price: {price}€</p>
          <h4>{category} Guitar</h4>
          {
            <p className={available ? "text-green-600" : "text-red-600"}>
              {available ? "Available" : "Currently out of stock"}
            </p>
          }
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
