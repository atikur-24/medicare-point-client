import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleImage from "../../assets/images/google.png";
import { AuthContext } from "../../contexts/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { addUser } from "../../hooks/userApi";

const SocialSigning = () => {
  const { signInWithGoogle, loading, setLoading } = useAuth(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          toast.success("Sign In Successful", { autoClose: 1000, hideProgressBar: true, theme: "colored", pauseOnHover: false });
        }
        navigate(from, { replace: true });
        addUser(result?.user);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message, { position: "top-center", autoClose: 5000, pauseOnHover: false });
        setLoading(false);
      });
  };

  return (
    <div className="form-control">
      <button disabled={loading} type="submit" onClick={handleGoogleSignIn} className="btn capitalize text-lg gap-6 w-full mx-auto">
        <img className="w-8" src={googleImage} alt="" />
        Sign In With Google
      </button>
    </div>
  );
};

export default SocialSigning;
