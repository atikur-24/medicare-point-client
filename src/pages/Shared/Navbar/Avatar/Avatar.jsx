import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";

const Avatar = () => {
  const { user } = useAuth();
  return (
    <div className="cursor-pointer">
      {user?.photoURL ? (
        <img alt="User" className="w-8 h-8 object-cover rounded-full ring ring-my-primary  ring-offset-2" src={user?.photoURL} />
      ) : (
        <p className="bg-lite p-2 rounded-full ">
          <FaUserAlt className="text-xl text-my-primary " />
        </p>
      )}
    </div>
  );
};

export default Avatar;
