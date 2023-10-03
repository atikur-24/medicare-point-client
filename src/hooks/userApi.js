import axios from "axios";
import Swal from "sweetalert2";

export const addUser = (user) => {
  const userData = {
    name: user?.displayName,
    email: user?.email,
    role: "user",
    image: user?.photoURL,
  };
  axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);
};

export const updateUserPharmacist = (id) => {
  const userData = {
    role: "Pharmacist",
  };
  axios.patch(`${import.meta.env.VITE_API_URL}/updateUserRole/${id}`, userData).then((res) => {
    if (res?.data?.modifiedCount > 0) {
      Swal.fire("Successful", "Convert User Role to pharmacist", "success");
    }
  });
};

export const updateUserAdmin = (id) => {
  const userData = {
    role: "admin",
  };
  axios.patch(`${import.meta.env.VITE_API_URL}/updateUserRole/${id}`, userData).then((res) => {
    if (res?.data?.modifiedCount > 0) {
      Swal.fire("Successful", "Convert User Role to Admin", "success");
    }
  });
};

export const updateUser = (id) => {
  const userData = {
    role: "user",
  };
  axios.patch(`${import.meta.env.VITE_API_URL}/updateUserRole/${id}`, userData).then((res) => {
    if (res?.data?.modifiedCount > 0) {
      Swal.fire("Successful", "Convert User Role to User", "success");
    }
  });
};

export const applicationForPharmacist = (application) => {
  axios.post(`${import.meta.env.VITE_API_URL}/pharmacyRegistrationApplication`, application).then((res) => {
    if (res.data.insertedId) {
      Swal.fire("Successful", "Your Application Success fully added", "success");
    }
  });
};

// User delete api
// export const deleteUser = (id) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "Are you Want delete This user?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#006F70",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       axios.delete(`${import.meta.env.VITE_API_URL}/delete-user/${id}`).then((res) => {
//         console.log(res.data);
//         if (res.data.deletedCount > 0) {
//           Swal.fire("Deleted!", "Your file has been deleted.", "success");
//         }
//       });
//     }
//   });
// };
