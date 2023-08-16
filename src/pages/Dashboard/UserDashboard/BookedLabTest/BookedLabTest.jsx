import axios from "axios";
import { useEffect, useState } from "react";
const BookedLabTest = () => {
  const [bookedlabtestitems, setbookedlabtestitems] = useState([]);

  useEffect(() => {
    axios
      .get("/bookedlabtestitems.json")
      .then((res) => setbookedlabtestitems(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return <div></div>;
};

export default BookedLabTest;
