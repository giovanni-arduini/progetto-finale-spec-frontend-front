import { useState, useEffect } from "react";

function useGuitars() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/guitars");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts;
  }, []);

  const getProduct = async () => {
    const response = await fetch(`http://localhost:3001/guitars/${id}`);
    const data = await response.json();
    return data;
  };

  return { products, setProducts, getProduct };
}

export default { products };
