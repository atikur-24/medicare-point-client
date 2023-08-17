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

  return (
    <div className="p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Test Name</th>
            <th className="py-2 px-4 text-left">Price (BDT)</th>
            <th className="py-2 px-4 text-left">Lab Test Date</th>
            <th className="py-2 px-4 text-left">Lab Test Time</th>
          </tr>
        </thead>
        <tbody>
          {bookedlabtestitems.map((bookedlabtestitem, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-4">
                <div className="flex items-center space-x-2">
                  <img src={bookedlabtestitem.image_url} alt="" className="h-10 w-10 rounded-full" />
                  <span className="text-sm font-semibold">{bookedlabtestitem.test_name}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="font-bold">৳{bookedlabtestitem.price}</span>
              </td>
              <td className="py-4 px-4">
                <p className="font-semibold">{bookedlabtestitem.date}</p>
              </td>
              <td className="py-4 px-4">
                <p className="font-semibold">{bookedlabtestitem.time}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedLabTest;
