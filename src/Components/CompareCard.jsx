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
      <div className="bg-white p-10">
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
          {itemSpecs.map(([key, value], index) => (
            <p key={index}>
              <strong>{sanitizeSpec(key)}:</strong> {value}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
