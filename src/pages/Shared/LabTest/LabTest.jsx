import { useState } from "react";
import AllLabTests from "./AllLabTests/AllLabTests";
import CheckCard from "./CheckCard/CheckCard";
import LabBanner from "./LabBanner/LabBanner";
import LabSearch from "./LabSearch/LabSearch";
import PopularLab from "./PopularLab";
import TopTest from "./TopTest";

const LabTest = () => {
  const [allLabTest, setAllLabTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-lite">
      <LabBanner />
      <CheckCard />
      <div className="my-container">
        <LabSearch setAllLabTests={setAllLabTests} setIsLoading={setIsLoading} />
        <AllLabTests allLabTest={allLabTest} isLoading={isLoading} />
        <PopularLab />
        <TopTest />
      </div>
    </div>
  );
};

export default LabTest;
