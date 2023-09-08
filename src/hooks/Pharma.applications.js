/* eslint-disable no-restricted-globals */
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


export const ApprovePR = (id, email, apt, newRole) => {
  const newType = {
    email,
    role: newRole,
    applicationType: apt,
  };
  axios.patch(`http://localhost:5000/pharmacyRApprove/${id}`, newType).then((res) => {
    console.log(res.data);
    if (res?.data.result.modifiedCount > 0 || res?.data.result2.modifiedCount > 0) {
      if (apt === "Approved") {
        Swal.fire(
          "Approved",
          "This Application Approved Successful",
          "success",
        );
      } else {
        Swal.fire(
          "Rejected",
          "This Application Rejected Successful",
          "error",
        );
      }
      location.reload();
    }
  });
};

export const DeleteApplication = (id) => {
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
      axios.delete(`http://localhost:5000/deleteRApplication/${id}`).then(res => {
        console.log(res);
        if (res.data.deleteCount > 0) {
          Swal.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success",
          );
        }
      });
    }
  });
};
