import CompareCard from "./CompareCard";
import SideTab from "./SideTab";
import { useCompareContext } from "../Contexts/CompareContext";

export default function CompareTab() {
  const { showCompare, itemsToCompare, closeCompare } = useCompareContext();

  return (
    <>
      <SideTab
        position={"bottom"}
        title={"Compare products"}
        content={
          <>
            {itemsToCompare.length < 1 ? (
              <div className=" items-center flex flex-col gap-5">
                <p className="text-xl italic text-white">
                  Compare up to 3 guitars!
                </p>
                <h2 className="text-white">No selected items to compare</h2>
              </div>
            ) : (
              <>
                <div
                  className="grid gap-4"
                  style={{
                    gridTemplateColumns: `repeat(${
                      itemsToCompare.length === 1 ? 2 : itemsToCompare.length
                    }, 1fr)`,
                  }}
                >
                  {itemsToCompare.map((item) => (
                    <CompareCard key={item.id} item={item} />
                  ))}
                  {itemsToCompare.length < 2 && (
                    <div className="text-white text-xl text-center">
                      Select another item to compare
                    </div>
                  )}
                </div>
              </>
            )}
          </>
        }
        show={showCompare}
        onClose={closeCompare}
      />
    </>
  );
}
