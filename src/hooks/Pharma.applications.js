import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

export const GetPharmacyRApplications = () => {
  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/pharmacyRegistrationApplications");
      return res?.data;
    },
  });
  return [applications, refetch];
};

export const ApprovePR = (id) => {
  const newType = {
    applicationType: "approved",
  };

  axios.put(`http://localhost:5000/pharmacyRApprove/${id}`, newType).then((res) => {
    if (res?.data.modifiedCount > 0) {
      Swal.fire(
        "Approved",
        "This Application Approved Successful",
        "success",
      );
    }
  });
};

export const DeleteApplication = (id) => {
  axios.delete(`http://localhost:5000/deleteRApplication/${id}`).then(res => {
    if (res.data.deletedCount > 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "Are you Want delete it!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Deleted!",
            "The Application Deleted Successful.",
            "success",
          );
        }
      });
    }
  });
};
