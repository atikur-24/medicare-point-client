import axios from "axios";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import AddLabCard from "./AddLabCard";
import UpdateLabTest from "./UpdateLabTest";

// Todo
const AllAvailableTest = () => {
  const [lab, setLab] = useState([]);
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/labAllItems`)
      .then((res) => setLab(res?.data));
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
        axios.delete(`http://localhost:5000/labItems/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "lab has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="px-2 md:px-5">
      <h3 className="text-center text-3xl my-7 font-semibold">
        All Available Tests
      </h3>
      <UpdateLabTest singleData={singleData} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
        {lab.map((category) => (
          <AddLabCard
            key={category._id}
            category={category}
            handlerDelete={handlerDelete}
            setSingleData={setSingleData}
          />
        ))}
      </div>
    </div>
  );
};

export default AllAvailableTest;
