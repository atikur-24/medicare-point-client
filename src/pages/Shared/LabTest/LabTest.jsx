import LabBanner from "./LabBanner";
import LabSearch from "./LabSearch";
import PopularLab from "./PopularLab";
import TopTest from "./TopTest";

const LabTest = () => {
  return (
    <div className="bg-lite">
      <LabBanner />
      <div className="my-container">
        <LabSearch />
        <PopularLab />
        <TopTest />
      </div>
    </div>
  );
};

export default LabTest;
