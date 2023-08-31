import axios from "axios";
import Swal from "sweetalert2";

export const addUser = (user) => {
  const userData = {
    name: user?.displayName,
    email: user?.email,
    role: "user",
    image: user?.photoURL,
  };
  axios.post("http://localhost:5000/users", userData).then((res) => console.log(res.data));
};

export const updateUserPharmacist = (id) => {
  const userData = {
    role: "Pharmacist",
  };
  axios.patch(`http://localhost:5000/updateUserRole/${id}`, userData).then((res) => {
    console.log(res.data);
    if (res?.data?.modifiedCount > 0) {
      Swal.fire("Successful", "Convert User Role to pharmacist", "success");
    }
  });
};
export const updateUserAdmin = (id) => {
  const userData = {
    role: "admin",
  };
  axios.patch(`http://localhost:5000/updateUserRole/${id}`, userData).then((res) => {
    console.log(res.data);
    if (res?.data?.modifiedCount > 0) {
      Swal.fire("Successful", "Convert User Role to Admin", "success");
    }
  });
};
export const updateUser = (id) => {
  const userData = {
    role: "user",
  };
  axios.patch(`http://localhost:5000/updateUserRole/${id}`, userData).then((res) => {
    console.log(res.data);
    if (res?.data?.modifiedCount > 0) {
      Swal.fire("Successful", "Convert User Role to User", "success");
    }
  });
};

export const applicationForPharmacist = (application) => {
  axios.post("http://localhost:5000/pharmacyRegistrationApplication", application).then((res) => {
    if (res.data.insertedId) {
      Swal.fire("Successful", "Your Application Success fully added", "success");
    }
  });
};
