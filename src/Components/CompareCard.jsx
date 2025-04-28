import { useAvailability } from "../Hooks/useAvailability";

export default function CompareCard({ item }) {
  if (!item) {
    return <p>Loading...</p>;
  }

  const { title, price, image, category, available, rating } = item;

  const itemSpecs = Object.entries(item).filter(
    ([key]) =>
      ![
        "title",
        "rating",
        "category",
        "available",
        "image",
        "price",
        "createdAt",
        "updatedAt",
        "id",
      ].includes(key)
  );

  function sanitizeSpec(key) {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .replace(/^./, (c) => c.toUpperCase());
  }

  const availability = useAvailability(available);

  return (
    <>
      <div className="bg-slate-400 p-10">
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold">{title}</h3>
          <div className="flex justify-between bg-white">
            <img className="h-48 w-96 object-contain" src={image} alt="" />
            <p>{rating}</p>
            <div className="flex flex-col items-end">
              <h4>Category: {category}</h4>
              <p>{available}</p>
              <p>Price: {price}€</p>
              {<p className={availability.style}>{availability.message}</p>}
            </div>
          </div>
          <table className="table-auto border-separate w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200">
            <thead></thead>
            <tbody>
              {itemSpecs.map(([key, value], index) => (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-800 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-600 border-gray-200"
                  key={index}
                >
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {sanitizeSpec(key)}:
                  </th>
                  <td className="px-6 py-4">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
