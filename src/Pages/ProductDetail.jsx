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
      <h1>{title}</h1>
      <p>{rating}</p>
      <div>
        <img src={image} alt="" />
        <div>
          <h4>{category}</h4>
          {<p>{available ? "Available" : "Currently out of stock"}</p>}
          <p>Price: {price}€</p>
        </div>
      </div>
    </>
  );
}
