import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Swal from "sweetalert2"; // Import SweetAlert library

const EditHealthSuggestion = () => {
  const [healthTips, setHealthTips] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allHealthTips").then((res) => setHealthTips(res.data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-8">
        {healthTips.map((healthTip, index) => (
          <div key={index} className="grid grid-cols-1 gap-4 justify-center items-center rounded-md shadow-sm p-2 border border-gray-3">
            <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{healthTip.name}</h2>
            <img src={healthTip.image} alt="img" className="h-32 mx-auto" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="space-x-1 flex justify-end">
              <label className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent">
                <TiEdit className="text-lg" />
              </label>
              <button type="button" className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink">
                <RiDeleteBinLine className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditHealthSuggestion;
