import axios from "axios";

export const addUser = (user) => {
    const userData = {
        userName: user?.displayName,
        userEmail: user?.email,
        userRole: "DefaultUser",
    };
    axios.post("http://localhost:5000/users", userData).then(res => console.log(res.data));
};
