import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Logo from "../../assets/Logo/logo.svg";
import loginAnimation from "../../assets/images/login-images/login.json";
import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";
import { AuthContext } from "../../contexts/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { addUser } from "../../hooks/userApi";
import "./Login.css";
import SocialSigning from "./SocialSigning";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const { signIn, loading, setLoading, resetPassword, logOut } = useAuth(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let from = location.state?.from?.pathname || "/";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    setLoading(true);
    signIn(data.email, data.password)
      .then((result) => {
        if (!result.user.emailVerified) {
          Swal.fire({
            icon: "error",
            title: "Not Verify email",
            showConfirmButton: false,
            timer: 2500,
          });
          logOut();
          return;
        }

        if (result.user) {
          toast.success("Sign In Successful", { autoClose: 1000, hideProgressBar: true, theme: "colored", pauseOnHover: false });
          addUser(result.user);
        }
        setError("");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message, { autoClose: 3000, theme: "colored", pauseOnHover: false });
        setError(err?.message);
        setLoading(false);
      });
  };

  const handelReset = () => {
    const email = watch("email");
    if (email) {
      setLoading(true);
      resetPassword(email)
        .then(() => {
          toast.success("Please Check Your Email", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        });
    } else {
      toast.error("Please Provide A Valid Email", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="bg-my-primary px-4 py-6 2xl:py-0 ">
      <WebSiteTitle title="Login" />
      <div className="flex justify-center items-center min-h-screen">
        <div className="login-singUp-bg   py-6 bg-white   shadow-xl rounded-lg">
          <div className=" items-center grid grid-cols-1 md:grid-cols-2 ">
            <div className="w-full hidden md:block">
              <Lottie animationData={loginAnimation} loop />
            </div>
            <div className="card w-full px-8 ">
              <div className=" mb-4 flex justify-center flex-col items-center space-y-4">
                <div>
                  <Link to="/">
                    <img className=" w-28" src={Logo} alt="logo" />
                  </Link>
                </div>
                <h2 className=" text-2xl font-bold text-my-primary ">Please Login </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  <div className="form-control ">
                    <input
                      type="email"
                      placeholder="Email"
                      className="placeholder-gray-4   rounded text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-500">
                        <ImWarning className="inline-block" /> Email is required
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="placeholder-gray-4 rounded text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent"
                        {...register("password", { required: true })}
                      />
                      <button type="button" onClick={handleTogglePassword} className="absolute right-5 bottom-2 text-my-primary">
                        {showPassword ? <AiFillEye className="text-2xl" /> : <AiFillEyeInvisible className="text-2xl" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500">
                        <ImWarning className="inline-block" /> password is required
                      </p>
                    )}
                  </div>
                </div>
                <button onClick={() => handelReset()} type="button" className="text-xs px-2 hover:underline ">
                  Forgot password?
                </button>
                <label className="label">
                  {error && (
                    <p className="text-red-500">
                      <ImWarning className="inline-block" /> {error}
                    </p>
                  )}
                </label>

                <button type="submit" className="login-btn w-full mx-auto form-control mt-2 tracking-widest">
                  {loading ? <TbFidgetSpinner className="text-3xl animate-spin" /> : "Login"}
                </button>
              </form>
              <div className="divider">OR</div>
              <SocialSigning />
              <div className="mt-4 ">
                <p className="inline-flex items-center">
                  <span className="font-nunito font-bold">Don&apos;t Have An Account ?</span>
                  <Link to="/signUp" className="text-sm underline font-semibold ml-2 md:hover:text-my-primary hover:text-white transition duration-300">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
