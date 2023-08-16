import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { ImWarning } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const { signInWithGoogle, singIn } = useAuth();
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
    singIn(data.email, data.password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          setError("");
          Swal.fire({
            icon: "success",
            title: "Your Google LogIn Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="nav-container bg-[#FFFFFF] h-screen">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
          <div className="w-full p-12">
            <img
              src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=robertav1_2_sidr"
              alt=""
            />
          </div>
          <div className="card w-full p-12">
            <h1 className="text-5xl font-semibold text-[#D467CA] text-center">
              Sign In !!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email <span className="text-rose-500 font-bold">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-600">
                    <ImWarning className="inline-block" /> Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password <span className="text-rose-500 font-bold">*</span>
                  </span>
                </label>
                <div className="join">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered join-item w-full"
                    {...register("password", { required: true })}
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className=" bg-[#D467CA] p-2 rounded join-item"
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-600">
                    <ImWarning className="inline-block" /> password is required
                  </p>
                )}
              </div>
              <label className="label">
                {error && (
                  <p className="text-red-600">
                    <ImWarning className="inline-block" /> {error}
                  </p>
                )}
              </label>

              <div className="form-control">
                <button
                  type="submit"
                  className="btn bg-[#D467CA] w-1/2 mx-auto"
                >
                  LogIn
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <button
                  type="submit"
                  onClick={handleGoogleSignIn}
                  className="btn bg-[#D467CA] w-1/2 mx-auto"
                >
                  <FaGoogle className="inline-block" />
                  Google Sign In
                </button>
              </div>
              <label className="label">
                <p>
                  <span>Don&apos;t Have An Account ?</span>{" "}
                  <Link to="/signUp" className="underline text-red-400">
                    Sign Up
                  </Link>
                </p>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
