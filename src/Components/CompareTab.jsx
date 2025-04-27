import CompareCard from "./Comparecard";
import SideTab from "./SideTab";
import { useCompareContext } from "../Contexts/CompareContext";

export default function CompareTab() {
  const {
    showCompare,
    itemsToCompare,
    compareItem,
    closeCompare,
    toggleCompare,
  } = useCompareContext();

  console.log(itemsToCompare);

  return (
    <>
      <SideTab
        position={"bottom"}
        title={"Compare products"}
        content={
          <>
            {itemsToCompare.map((item) => (
              <CompareCard key={item.id} item={item} />
            ))}
          </>
        }
        show={showCompare}
        onClose={closeCompare}
        onRemove={() => {}}
      />
    </>
  );
}
