import { useState } from "react";
import WebSiteTitle from "../../../components/WebSiteTitle/WebSiteTitle";
import AllLabTests from "./AllLabTests/AllLabTests";
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
  const [allLabTest, setAllLabTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-lite">
      <WebSiteTitle title="Lab Test" />
      <LabBanner />
      <CheckCard />
      <div className="my-container">
        <LabSearch setAllLabTests={setAllLabTests} setIsLoading={setIsLoading} />
        <AllLabTests allLabTest={allLabTest} isLoading={isLoading} />
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
