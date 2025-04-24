import { useState } from "react";
import { useGlobalContext } from "../Contexts/GlobalContext";

export default function ProductsList() {
  const { products } = useGlobalContext;
  const [search, setSearch] = useState("");

  return (
    <>
      <section>
        <h1>Guitars</h1>

        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            name="category"
            id="category"
            onChange={(e) => setSelectCategory(e.target.value)}
          ></select>
        </div>

        <button>Sort by name</button>
        <div></div>
      </section>
    </>
  );
}
