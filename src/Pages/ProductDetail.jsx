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

  const {
    title,
    price,
    image,
    category,
    available,
    model,
    top,
    body,
    neck,
    fretboard,
    inlays,
    binding,
    profile,
    nutWidth,
    sacle,
    bridge,
    pickUp,
    controls,
    electronic,
    color,
    madeIn,
    rating,
  } = guitar;

  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{rating}</p>
      <div className="flex justify-between bg-white">
        <img src={image} alt="" />
        <div className="flex flex-col items-end">
          <h4>{category}</h4>
          <p>Price: {price}€</p>
          {
            <p className={available ? "text-green-600" : "text-red-600"}>
              {available ? "Available" : "Currently out of stock"}
            </p>
          }
        </div>
      </div>
    </>
  );
}
