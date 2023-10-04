import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "../../assets/Logo/logo.svg";
import loginAnimation from "../../assets/images/login-images/login.json";
import WebSiteTitle from "../../components/WebSiteTitle/WebSiteTitle";
import { AuthContext } from "../../contexts/AuthProvider";
import useAuth from "../../hooks/useAuth";
import SocialSigning from "./SocialSigning";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    createUser,
    updateUserProfile,
    loading,
    setLoading,
    emailVerification,
    logOut,
  } = useAuth(AuthContext);

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        setError("");
        createUser(data?.email, data?.password)
          .then((result) => {
            emailVerification(result?.user);
            updateUserProfile(data?.name, imageUrl)
              .then(() => {
                setError("");
                Swal.fire({
                  icon: "info",
                  title: "Email Verification",
                  text: "Check your email and verify your account",
                  showConfirmButton: true,
                });
                logOut();
                navigate("/login");
              })
              .catch((err) => {
                setError(err.message);
              });
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      });
  };

  return (
    <div className="bg-my-primary px-4 py-6 2xl:py-0">
      <WebSiteTitle title="Sign Up" />
      <div className="flex min-h-screen  items-center justify-center ">
        <div className=" login-singUp-bg  rounded-lg   bg-white shadow-xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="hidden w-full md:block ">
              <Lottie animationData={loginAnimation} loop />
            </div>
            <div>
              <div className="card card-body w-full px-8 md:p-12">
                <div className=" flex flex-col items-center justify-center space-y-4">
                  <div>
                    <Link to="/">
                      <img className=" w-28" src={Logo} alt="logo" />
                    </Link>
                  </div>
                  <h2 className=" text-2xl font-bold text-my-primary ">
                    Please Sign Up{" "}
                  </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded border-b-2 border-gray-3 p-2  text-lg font-medium placeholder-gray-4 focus:border-b-2 focus:border-accent focus:outline-none"
                      required
                      {...register("name")}
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="file"
                      {...register("image", { required: true })}
                      className="file-input file-input-bordered file-input-accent w-full rounded"
                    />
                    {errors.image && (
                      <span className="text-red-600">image is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded border-b-2 border-gray-3 p-2  text-lg font-medium placeholder-gray-4 focus:border-b-2 focus:border-accent focus:outline-none"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-600">
                        <ImWarning className="inline-block" /> Email is required
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                        })}
                        placeholder="Password"
                        className="w-full rounded border-b-2 border-gray-3 p-2  text-lg font-medium placeholder-gray-4 focus:border-b-2 focus:border-accent focus:outline-none "
                      />
                      <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute bottom-2 right-5 text-my-primary"
                      >
                        {showPassword ? (
                          <AiFillEye className="text-2xl" />
                        ) : (
                          <AiFillEyeInvisible className="text-2xl" />
                        )}
                      </button>
                      {errors.password?.type === "required" && (
                        <p className="text-red-600">
                          <ImWarning className="inline-block" /> Password is
                          required
                        </p>
                      )}
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-600">
                      <ImWarning className="inline-block" /> {error}
                    </p>
                  )}

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="login-btn form-control mx-auto mt-2 w-full tracking-widest"
                    >
                      {loading ? (
                        <TbFidgetSpinner className="animate-spin text-3xl" />
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </form>
                <div className="divider">OR</div>
                <SocialSigning />
                <div className="mt-2 ">
                  <p className="inline-flex items-center">
                    <span className="font-nunito font-bold">
                      Already Have An Account ?
                    </span>
                    <Link
                      to="/login"
                      className="ml-2 text-sm font-semibold underline transition duration-300 hover:text-white md:hover:text-my-primary"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
