import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert library
import { fetchAllHealthTips } from "../../../../Features/HealthTips/allHealthTips";
import { deleteHealthTipsApi } from "../../../../Features/HealthTips/deleteHealthTips";

const EditHealthSuggestion = () => {
  const [healthTips, setHealthTips] = useState([]);
  const { allHealthTips } = useSelector((state) => state.allHealthTips);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllHealthTips());
  }, [dispatch]);
  useEffect(() => {
    axios.get("http://localhost:5000/allHealthTips").then((res) => setHealthTips(res.data));
  }, []);

  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteHealthTipsApi(id));
        dispatch(fetchAllHealthTips());
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-8">
        {allHealthTips.map((healthTip, index) => (
          <div key={index} className="grid grid-cols-1 gap-4 justify-center items-center rounded-md shadow-sm p-2 border border-gray-3">
            <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{healthTip.name}</h2>
            <img src={healthTip.image} alt="img" className="h-32 mx-auto" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="space-x-1 flex justify-end">
              <Link to={`/dashboard/update-health-tips/${healthTip._id}`}>
                <label className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent">
                  <TiEdit className="text-lg" />
                </label>
              </Link>
              <button type="button" onClick={() => handlerDelete(healthTip._id)} className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink">
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
