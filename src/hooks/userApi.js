import axios from "axios";
import Swal from "sweetalert2";

export const addUser = (user) => {
    const userData = {
        name: user?.displayName,
        email: user?.email,
        role: "user",
        image: user?.photoURL,
    };
    axios.post("http://localhost:5000/users", userData).then(res => console.log(res.data));
};



export const updateUserRole = () => {
    const userData = {
        role: "Pharmacist",
    };
    axios.put("url", userData).then(res => {
        console.log(res.data);
    });
};



export const applicationForPharmacist = (application) => {
    axios.post("http://localhost:5000/pharmacyRegistrationApplication", application).then(res => {
        // console.log(res.data);
        if (res.data.insertedId) {
            Swal.fire(
                "Successful",
                "Your Application Success fully added",
                "success",
            );
        }
    });
};
