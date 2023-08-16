/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form";
import addDoctorImg from "../../../../assets/images/reception.png";

import "./AllDoctor.css";

const AddDoctor = () => {
  //   const imageHostingKey = import.meta.env.VITE_API_KEY;
  //   const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.photo[0]);

    // const formData = new FormData();
    // formData.append("image", data.photo[0]);

    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <img className="w-4/5 mx-auto" src={addDoctorImg} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="admission-form doctor-form"
        >
          <h3 className="text-center text-3xl font-semibold my-5 text-my-primary">
            Add A Doctor
          </h3>
          <div className="divider" />

          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Name</h4>
              <input
                required
                placeholder="Enter your name"
                type="text"
                {...register("name")}
              />
            </div>
            <div>
              <h4>Department</h4>
              <input
                required
                placeholder="Enter department"
                type="text"
                {...register("department")}
              />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Degree</h4>
              <input
                required
                placeholder="Enter Degree"
                type="text"
                {...register("degree")}
              />
            </div>
            <div>
              <h4>Email</h4>
              <input
                required
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Phone Number</h4>
              <input
                required
                type="text"
                placeholder="Enter your phone Number"
                {...register("PhoneNumber")}
              />
            </div>
            <div>
              <h4>Hospital</h4>
              <input
                required
                placeholder="Enter hospital name"
                type="text"
                {...register("hospital")}
              />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Enter fees</h4>
              <input
                required
                placeholder="Enter fees"
                type="text"
                {...register("fees")}
              />
            </div>
            <div>
              <h4>Photo</h4>
              <input required type="file" {...register("photo")} />
            </div>
          </div>

          <div>
            <input
              required
              className="submit-btn cursor-pointer"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
