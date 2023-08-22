import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
import SocialSigning from "./SocialSigning";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const { createUser, updateUserProfile, loading, setLoading } = useAuth(AuthContext);
  let from = location.state?.from?.pathname || "/";

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

    // Image Upload
    const image = data.image[0];
    // console.log(image);
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
        if (data.password !== data.confirmPassword) {
          setError("password dose not match");
        } else {
          setError("");
          createUser(data?.email, data?.password)
            .then((result) => {
              updateUserProfile(data?.name, imageUrl)
                .then(() => {
                  setError("");
                  Swal.fire({
                    icon: "success",
                    title: "Your Register Successfully",
                    showConfirmButton: false,
                    timer: 2500,
                  });
                  addUser(result?.user);
                  navigate(from, { replace: true });
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
        }
      });
  };

  return (
    <div className="bg-my-primary py-6 px-4">
      <div className="flex justify-center  items-center min-h-screen ">
        <div className=" login-singUp-bg  bg-white   shadow-xl rounded-lg ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="w-full hidden md:block ">
              <Lottie animationData={loginAnimation} loop />
            </div>
            <div>
              <div className="card w-full md:p-12 card-body px-8">
                <div className="mx-auto">
                  <Link to="/">
                    <img className=" w-28" src={Logo} alt="logo" />
                  </Link>
                </div>
                <h2 className="text-center text-2xl font-bold text-my-primary my-2">Please Login </h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
                  <div className="form-control">
                    {/* <label className="label mb-2">
                      <span className="label-text">
                        Name <span className="text-rose-500 font-bold">*</span>
                      </span>
                    </label> */}
                    <input
                      type="text"
                      placeholder="name"
                      className="placeholder-gray-4 text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent"
                      required
                      {...register("name")}
                    />
                  </div>
                  <div className="form-control">
                    {/* <label className="label">
                      <span className="label-text">
                        Upload image<span className="text-rose-500 font-bold">*</span>
                      </span>
                    </label> */}

                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent w-full" />
                    {errors.image && <span className="text-red-600">image is required</span>}
                  </div>
                  <div className="form-control">
                    {/* <label className="label">
                      <span className="label-text">Email</span>
                    </label> */}
                    <input
                      type="email"
                      placeholder="email"
                      className="placeholder-gray-4 text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-600">
                        <ImWarning className="inline-block" /> Email is required
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    {/* <label className="label">
                      <span className="label-text">Password</span>
                    </label> */}
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        })}
                        placeholder="password"
                        className="placeholder-gray-4 text-lg font-medium border-gray-3  w-full border-b-2 focus:border-b-2 focus:outline-none p-2 focus:border-accent "
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
                  {/* <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="confirmPassword"
                      className="input border-gray-3 w-full focus:input-bordered input-accent"
                      {...register("confirmPassword", { required: true })}
                    />

                    {errors.confirmPassword && (
                      <p className="text-red-600">
                        <ImWarning className="inline-block" /> Confirm password is required
                      </p>
                    )}
                  </div> */}
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
                <label className="label">
                  <p>
                    Already Have An Account ?
                    <Link to="/login" className="underline font-semibold">
                      Login
                    </Link>
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
