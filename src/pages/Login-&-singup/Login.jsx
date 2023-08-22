import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "../../assets/Logo/logo.svg";
import loginAnimation from "../../assets/images/login-images/login.json";
import { AuthContext } from "../../contexts/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { addUser } from "../../hooks/userApi";
import "./Login.css";
import SocialSigning from "./SocialSigning";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const { signIn, loading, setLoading } = useAuth(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
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
        if (result.user) {
          Swal.fire({
            icon: "success",
            title: "Your LogIn Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
          addUser(result.user);
        }
        setError("");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="bg-my-primary px-4 ">
      <div className="flex justify-center items-center min-h-screen">
        <div className="login-singUp-bg container mx-auto py-6 bg-white   shadow-xl rounded-lg">
          <div className=" items-center grid grid-cols-1 md:grid-cols-2 ">
            <div className="w-full hidden md:block">
              <Lottie animationData={loginAnimation} loop />
            </div>
            <div className="card w-full px-8 ">
              <div className="mx-auto mb-5">
                <Link to="/">
                  <img className=" w-28" src={Logo} alt="logo" />
                </Link>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input border-gray-3 w-full focus:input-bordered input-accent" {...register("email", { required: true })} />
                  {errors.email && (
                    <p className="text-red-600">
                      <ImWarning className="inline-block" /> Email is required
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text mt-3">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="input border-gray-3 w-full focus:input-bordered input-accent"
                      {...register("password", { required: true })}
                    />
                    <button type="button" onClick={handleTogglePassword} className="absolute right-5 bottom-4 text-my-primary">
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-600">
                      <ImWarning className="inline-block" /> password is required
                    </p>
                  )}
                </div>
                <button type="button" className="text-xs hover:underline mt-2">
                  Forgot password?
                </button>
                <label className="label">
                  {error && (
                    <p className="text-red-600">
                      <ImWarning className="inline-block" /> {error}
                    </p>
                  )}
                </label>

                <button type="submit" className="my-btn w-full mx-auto form-control mt-2 tracking-widest">
                  {loading ? <TbFidgetSpinner className="text-3xl animate-spin" /> : "Login"}
                </button>
              </form>
              <div className="divider">OR</div>
              <SocialSigning />
              <label className="">
                <p className=" mt-2">
                  <span>Don&apos;t Have An Account ?</span>{" "}
                  <Link to="/signUp" className="underline font-semibold  hover:text-my-primary">
                    Sign Up
                  </Link>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
