import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import googleImage from "../../assets/images/google.png";
import AuthProvider from "../../contexts/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { addUser } from "../../hooks/userApi";

const SocialSigning = () => {
  const { signInWithGoogle } = useAuth(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            icon: "success",
            title: "Your Google LogIn Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        navigate(from, { replace: true });
        addUser(result?.user);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="form-control">
      <button type="submit" onClick={handleGoogleSignIn} className="btn capitalize text-lg gap-6 w-full mx-auto">
        <img className="w-8" src={googleImage} alt="" />
        Sign In With Google
      </button>
    </div>
  );
};

export default SocialSigning;
