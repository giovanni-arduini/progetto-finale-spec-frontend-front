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

  return { products };
}

export default { products };
