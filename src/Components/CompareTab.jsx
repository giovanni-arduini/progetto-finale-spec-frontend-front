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
              <h2 className="text-white">No selected items to compare</h2>
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
