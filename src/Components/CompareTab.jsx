import CompareCard from "./Comparecard";
import SideTab from "./SideTab";
import { useCompareContext } from "../Contexts/CompareContext";
import { use } from "react";

export default function CompareTab() {
  const {
    showCompare,
    itemsToCompare,
    compareItem,
    closeCompare,
    toggleCompare,
  } = useCompareContext();

  return (
    <>
      <SideTab
        title={"Compare products"}
        content={
          <>
            {" "}
            <CompareCard />
            <CompareCard />
          </>
        }
        show={true}
        onClose={() => {}}
        onRemove={() => {}}
      />
    </>
  );
}
