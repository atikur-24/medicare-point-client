/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import { useEffect } from "react";
import axios from "axios";

const HighestSellings = () => {
  const [headingSMedicines, setHeadingSMedicines] = useState([]);
  useEffect(() => {
    axios
      .get("/categories.json")
      .then((res) => setHeadingSMedicines(res?.data));
  }, []);

  return (
    <div className="my-10 nav-container">
      <Heading title={"Highest selling Medicine "} center={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {headingSMedicines.slice(0, 6).map((medicine, index) => (
          <div key={index}>
            <div className=" bg-[#FDFDFD] drop-shadow-2xl p-2 rounded-md cursor-pointer border-[1px] border-neutral-200">
              <img
                src={medicine?.image_url}
                alt="Category Image"
                className=" rounded-md"
              />
              <div>
                <h2 className="text-center font-semibold mt-2">
                  {medicine?.category_name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestSellings;
