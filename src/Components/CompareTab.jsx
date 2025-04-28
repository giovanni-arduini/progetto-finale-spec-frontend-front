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
                {itemsToCompare.map((item) => (
                  <CompareCard key={item.id} item={item} />
                ))}
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
