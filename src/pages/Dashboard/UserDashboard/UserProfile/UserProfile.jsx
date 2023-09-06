import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const UserProfile = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  console.log(currentUserData);
  const { user } = useContext(AuthContext); // Access the user object from the context
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      // Find the current user's data based on their email
      const currentUser = res.data.find((userData) => userData.email === user.email);

      if (currentUser) {
        setCurrentUserData(currentUser);
      }
    });
  }, [user.email]);

  return <div />;
};

export default UserProfile;
