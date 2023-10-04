import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";

const Avatar = () => {
  const { user } = useAuth();
  return (
    <div className="cursor-pointer">
      {user?.photoURL ? (
        <img
          alt="User"
          className="h-8 w-8 rounded-full object-cover ring ring-my-primary  ring-offset-2"
          src={user?.photoURL}
        />
      ) : (
        <p className="rounded-full bg-lite p-2 ">
          <FaUserAlt className="text-xl text-my-primary " />
        </p>
      )}
    </div>
  );
};

export default Avatar;
