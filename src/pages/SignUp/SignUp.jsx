import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { ImWarning } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Logo from "../Shared/Navbar/Logo/Logo";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const { signInWithGoogle, createUser, updateUserProfile } = useAuth();
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
    // Image Upload
    const image = data.image[0];
    console.log(image);
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
            .then(() => {
              updateUserProfile(data?.name, imageUrl)
                .then(() => {
                  setError("");
                  Swal.fire({
                    icon: "success",
                    title: "Your Register Successfully",
                    showConfirmButton: false,
                    timer: 2500,
                  });

                  navigate(from, { replace: true });
                })
                .catch((err) => {
                  setError(err.message);
                });
            })
            .catch((err) => {
              setError(err.message);
            });
        }
      });
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
    <div className="nav-container bg-white h-screen">
      <div className="mt-12">
        <Logo />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full md:p-12 my-auto hidden md:block">
            <img
              src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1686147636~exp=1686148236~hmac=f9d5e9e5cccc6273306dd2e8d3e4ca6f76e0dedd3e9534849c18c5d80153bf30"
              alt="sign Up"
            />
          </div>
          <div>
            <div className="card w-full md:p-12">
              <h1 className="text-2xl md:text-4xl font-semibold text-my-primary text-center">Sign Up !!</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Name <span className="text-rose-500 font-bold">*</span>
                    </span>
                  </label>
                  <input type="text" placeholder="name" className="input input-bordered" required {...register("name")} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Upload image<span className="text-rose-500 font-bold">*</span>
                    </span>
                  </label>

                  <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent w-full" />
                  {errors.image && <span className="text-red-600">image is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Email <span className="text-rose-500 font-bold">*</span>
                    </span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
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
                      className="input input-bordered w-full"
                    />
                    <button type="button" onClick={handleTogglePassword} className="absolute right-5 bottom-4 text-my-primary">
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Confirm Password <span className="text-rose-500 font-bold">*</span>
                    </span>
                  </label>
                  <input type="password" placeholder="confirmPassword" className="input input-bordered" {...register("confirmPassword", { required: true })} />
                  {error && (
                    <p className="text-red-600">
                      <ImWarning className="inline-block" /> {error}
                    </p>
                  )}
                  {errors.confirmPassword && (
                    <p className="text-red-600">
                      <ImWarning className="inline-block" /> Confirm password is required
                    </p>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="my-btn w-full mx-auto">
                    Register
                  </button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                  <button type="submit" onClick={handleGoogleSignIn} className="my-btn w-full mx-auto">
                    <FaGoogle className="inline-block" />
                    Google Sign In
                  </button>
                </div>
                <label className="label">
                  <p>
                    Already Have An Account ?
                    <Link to="/login" className="underline text-red-400">
                      {" "}
                      Login
                    </Link>
                  </p>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
