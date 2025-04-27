import CompareCard from "./Comparecard";
import SideTab from "./SideTab";

export default function CompareTab() {
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
