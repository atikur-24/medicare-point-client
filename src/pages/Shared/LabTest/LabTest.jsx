import CheckCard from "./CheckCard/CheckCard";
import LabBanner from "./LabBanner/LabBanner";
import LabBook from "./LabBook";
import LabFaqs from "./LabFaqs";
import LabPartner from "./LabPartner";
import LabSearch from "./LabSearch/LabSearch";
import LabWork from "./LabWork";
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
        <LabWork />
        <LabPartner />
        <LabBook />
        <LabFaqs />
      </div>
    </div>
  );
};

export default LabTest;
