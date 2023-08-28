import CheckCard from "./CheckCard/CheckCard";
import LabBanner from "./LabBanner/LabBanner";
import LabSearch from "./LabSearch/LabSearch";
import PopularLab from "./PopularLab";
import TopTest from "./TopTest";

const LabTest = () => {
  return (
    <div className="bg-lite">
      <LabBanner />
      <CheckCard />
      <div className="my-container">
        <LabSearch />
        <PopularLab />
        <TopTest />
      </div>
    </div>
  );
};

export default LabTest;
