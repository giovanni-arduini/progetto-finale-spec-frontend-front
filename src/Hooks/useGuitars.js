import { useState, useEffect } from "react";

function useGuitars() {
  const [products, setProducts] = useState([]);
  const URL = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => fetchProducts, []);

  const getProduct = async (id) => {
    const response = await fetch(URL + id);
    const data = await response.json();
    return data;
  };

  return { products, setProducts, getProduct };
}

export default useGuitars;
