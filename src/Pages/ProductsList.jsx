import { useState } from "react";
import { useGlobalContext } from "../Contexts/GlobalContext";

export default function ProductsList() {
  const { products } = useGlobalContext;
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredList = () => {
    return [...products].filter((p) => {
      const query = p.title
        .toLowerCase()
        .includes(search.toLocaleLowerCase().trim());
      const category =
        selectedCategory === "" || p.category === selectedCategory;
      return query && category;
    });
  };

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
          >
            <option value="">All categories</option>
            <option value="Acoustic">Acoustic</option>
            <option value="Electric">Electric</option>
            <option value="Acoustic-Electric">Acoustic-Electric</option>
            <option value="Semi-Hollow Electric">Semi-Hollow Electric</option>
          </select>
        </div>

        <button>Sort by name</button>
        <div>
          {filteredList.map((product) => {
            <div key={product.id}>{product.title}</div>;
          })}
        </div>
      </section>
    </>
  );
}
