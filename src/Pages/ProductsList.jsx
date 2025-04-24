import { useState, useMemo } from "react";
import { useGlobalContext } from "../Contexts/GlobalContext";
import ProductCard from "../Components/ProductCard";

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
  }, [search, products, selectedCategory, sortOrder]);

  console.log(products);

  return (
    <>
      <section>
        <h1 className="text-3xl my-5">Guitars</h1>

        <div className="mb-3">
          <input
            className="bg-white rounded-lg mr-3 p-1 px-2"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="bg-white rounded-lg mr-3 p-1"
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

        <button
          className="bg-white rounded-lg p-1 mb-4 px-2"
          onClick={() => {
            setSortOrder(sortOrder * -1);
          }}
        >
          Sort by name
        </button>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {filteredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsList;
