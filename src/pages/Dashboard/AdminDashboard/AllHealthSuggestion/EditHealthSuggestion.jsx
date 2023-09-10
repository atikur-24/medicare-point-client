import { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchAllHealthTips } from "../../../../Features/HealthTips/allHealthTips";
import { deleteHealthTipsApi } from "../../../../Features/HealthTips/deleteHealthTips";

const EditHealthSuggestion = () => {
  const { allHealthTips } = useSelector((state) => state.allHealthTips);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllHealthTips());
  }, [dispatch]);

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
      <div className="m-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Health Tips</div>
            <div className="stat-value text-my-primary">{allHealthTips.length || 0}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-8">
        {allHealthTips.map((healthTip) => (
          <div key={healthTip._id} className="grid grid-cols-1 gap-4 justify-center items-center rounded-2xl box-shadow p-4 border border-gray-3 bg-white">
            <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{healthTip.name}</h2>
            <img src={healthTip.image} alt="img" className="h-32 mx-auto" />
            <p className="text-justify md:h-32">{healthTip.prevention.slice(0, 150)}...</p>
            <div className="space-x-1 flex justify-center gap-4">
              <Link to={`/dashboard/update-health-tips/${healthTip._id}`}>
                <label className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent">
                  <TiEdit className="text-lg" />
                </label>
              </Link>
              <button type="button" onClick={() => handlerDelete(healthTip._id)} className="btn btn-circle btn-sm bg-red-500 rounded-full bg-opacity-30">
                <RiDeleteBinLine className="text-3xl  text-red-500 p-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditHealthSuggestion;
