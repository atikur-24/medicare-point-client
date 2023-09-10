import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllLabTests } from "../../../../Features/AllLabTests/allLabTest";
import { deleteLabTestApi } from "../../../../Features/AllLabTests/deleteLabTest";
import Loader from "../../../../components/Loader";
import AddLabCard from "./AddLabCard";
import UpdateLabTest from "./UpdateLabTest";

// Todo
const AllAvailableTest = () => {
  const { isLoading, allLabTest } = useSelector((state) => state.allLabTest);
  const [singleData, setSingleData] = useState({});
  const [x, setX] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLabTests());
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
        dispatch(deleteLabTestApi(id));
        dispatch(fetchAllLabTests());
      }
    });
  };

  if (isLoading) {
    return <Loader spinner />;
  }

  return (
    <div className="px-2 md:px-5 py-10">
      <div className=" mb-8">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title text-title-color font-nunito font-bold uppercase ">Total Lab</div>
            <div className="stat-value text-my-primary">{allLabTest.length || 0}</div>
          </div>
        </div>
      </div>
      <UpdateLabTest x={x} setX={setX} singleData={singleData} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
        {allLabTest.map((category) => (
          <AddLabCard key={category._id} category={category} handlerDelete={handlerDelete} setSingleData={setSingleData} />
        ))}
      </div>
    </div>
  );
};

export default AllAvailableTest;
