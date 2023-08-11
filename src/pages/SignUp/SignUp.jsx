import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { ImWarning } from "react-icons/im";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    setError("");
  };

  return (
    <div className="nav-container bg-[#FFFFFF] h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full p-12 my-auto">
          <img
            src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?w=740&t=st=1686147636~exp=1686148236~hmac=f9d5e9e5cccc6273306dd2e8d3e4ca6f76e0dedd3e9534849c18c5d80153bf30"
            alt="sign Up"
          />
        </div>
        <div>
          <div className="card w-full p-12">
            <h1 className="text-5xl font-semibold text-[#D467CA] text-center">Sign Up !!</h1>
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
                    Photo URL <span className="text-rose-500 font-bold">*</span>
                  </span>
                </label>
                <input type="url" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
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
                <div className="join">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered join-item w-full"
                  />
                  <button type="button" onClick={handleTogglePassword} className=" bg-[#D467CA] p-2 rounded join-item">
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
                <button type="submit" className="btn bg-[#D467CA] w-1/2 mx-auto">
                  Register
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <button type="submit" className="btn bg-[#D467CA] w-1/2 mx-auto">
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
  );
};

export default SignUp;
