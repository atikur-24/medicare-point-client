import SectionTitle from "../../../components/SectionTitle";
import LabSearch from "./LabSearch";
import PopularLab from "./PopularLab";
import TopTest from "./TopTest";

const LabTest = () => {
  return (
    <div className="bg-lite">
      <div className="my-container">
        <SectionTitle title="Lab Test" />
        <LabSearch />
        <PopularLab />
        <TopTest />
      </div>
    </div>
  );
};

export default LabTest;
