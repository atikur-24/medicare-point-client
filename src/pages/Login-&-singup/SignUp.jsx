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
import { AuthContext } from "../../contexts/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { addUser } from "../../hooks/userApi";
import SocialSigning from "./SocialSigning";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, loading, setLoading, emailVerification, logOut } = useAuth(AuthContext);

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
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
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
            emailVerification(result?.user).then(() => {
            });
            updateUserProfile(data?.name, imageUrl)
              .then(() => {
                setError("");
                Swal.fire({
                  icon: "info",
                  title: "Email Verification",
                  text: "Check your email and verify account",
                  showConfirmButton: true,
                });
                logOut();
                addUser(result?.user);
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
    <div className="bg-my-primary py-6 px-4 2xl:py-0">
      <div className="flex justify-center  items-center min-h-screen ">
        <div className=" login-singUp-bg  bg-white   shadow-xl rounded-lg ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="w-full hidden md:block ">
              <Lottie animationData={loginAnimation} loop />
            </div>
            <div>
              <div className="card w-full md:p-12 card-body px-8">
                <div className=" flex justify-center flex-col items-center space-y-4">
                  <div>
                    <Link to="/">
                      <img className=" w-28" src={Logo} alt="logo" />
                    </Link>
                  </div>
                  <h2 className=" text-2xl font-bold text-my-primary ">Please Sign Up </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Name"
                      className="placeholder-gray-4 rounded text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent"
                      required
                      {...register("name")}
                    />
                  </div>
                  <div className="form-control">
                    <input type="file" {...register("image", { required: true })} className="file-input rounded file-input-bordered file-input-accent w-full" />
                    {errors.image && <span className="text-red-600">image is required</span>}
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      className="placeholder-gray-4 rounded text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent"
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
                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        })}
                        placeholder="Password +6"
                        className="placeholder-gray-4 rounded text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent "
                      />
                      <button type="button" onClick={handleTogglePassword} className="absolute right-5 bottom-2 text-my-primary">
                        {showPassword ? <AiFillEye className="text-2xl" /> : <AiFillEyeInvisible className="text-2xl" />}
                      </button>
                      {errors.password?.type === "required" && (
                        <p className="text-red-600">
                          <ImWarning className="inline-block" /> Password is required
                        </p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-600">
                          <ImWarning className="inline-block" /> Password must be 6 characters
                        </p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p className="text-red-600">
                          <ImWarning className="inline-block" /> Password must be less than 20 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-600">
                          <ImWarning className="inline-block" /> Password must have one Uppercase one lower case, one number and one special character.
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
                    <button type="submit" className="login-btn w-full mx-auto form-control mt-2 tracking-widest">
                      {loading ? <TbFidgetSpinner className="text-3xl animate-spin" /> : "Register"}
                    </button>
                  </div>
                </form>
                <div className="divider">OR</div>
                <SocialSigning />
                <div className="mt-2 ">
                  <p className="inline-flex items-center">
                    <span className="font-nunito font-bold">Already Have An Account ?</span>
                    <Link to="/login" className="text-sm underline font-semibold ml-2 md:hover:text-my-primary hover:text-white transition duration-300">
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
