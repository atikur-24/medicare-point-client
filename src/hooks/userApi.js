import axios from "axios";

export const addUser = (user) => {
    const userData = {
        name: user?.displayName,
        email: user?.email,
        role: "user",
    };
    axios.post("http://localhost:5000/users", userData).then(res => console.log(res.data));
};
