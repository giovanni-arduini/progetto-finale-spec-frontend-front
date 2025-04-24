import { useState, useMemo } from "react";
import { useGlobalContext } from "../Contexts/GlobalContext";

function ProductsList() {
  const { products } = useGlobalContext();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState(1);

  const filteredList = useMemo(() => {
    return [...products]
      .filter((p) => {
        const query = p.title
          .toLowerCase()
          .includes(search.toLocaleLowerCase().trim());
        const category =
          selectedCategory === "" || p.category === selectedCategory;
        return query && category;
      })
      .sort((a, b) => {
        return a.title.localeCompare(b.title) * sortOrder;
      });
  }, [search, products, selectedCategory]);

  console.log(products);

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
            onChange={(e) => setSelectedCategory(e.target.value)}
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
          {filteredList.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsList;
