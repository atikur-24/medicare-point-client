import { Helmet } from "react-helmet-async";

const WebSiteTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{`MediCare Point - ${title} `}</title>
    </Helmet>
  );
};

export default WebSiteTitle;
