import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useGlobalContext } from "../Contexts/GlobalContext";
import { useCompareContext } from "../Contexts/CompareContext";

import ProductCard from "../Components/ProductCard";

const debounce = (callback, delay) => {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, delay);
  };
};

function ProductsList() {
  const { products } = useGlobalContext();
  const { showCompare } = useCompareContext();

  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState(1);

  const handleSearch = useCallback(
    debounce((value) => setSearch(value), 400),
    []
  );

  useEffect(() => {
    searchRef.current.focus();
  }, []);

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

  return (
    <>
      <section
        className={`h-full transition-all duration-300 flex flex-col items-center ${
          showCompare ? "pb-100" : "pb-10"
        }`}
      >
        {" "}
        <h1 className="text-3xl font-bold my-5 products-header">Guitars</h1>
        <div className="mb-3 flex flex-wrap gap-2 justify-center">
          <input
            className="bg-white rounded-lg mr-3 p-1 px-2"
            type="text"
            placeholder="Search by name"
            ref={searchRef}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <select
            className="bg-white rounded-lg mr-3 p-1 cursor-pointer"
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
          className="bg-white rounded-lg p-1 mb-4 px-2 cursor-pointer"
          onClick={() => {
            setSortOrder(sortOrder * -1);
          }}
        >
          Sort by name
          <span className="text-xs text-gray-600">
            {sortOrder > 0 ? "  (A to Z)" : "  (Z to A)"}
          </span>
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
