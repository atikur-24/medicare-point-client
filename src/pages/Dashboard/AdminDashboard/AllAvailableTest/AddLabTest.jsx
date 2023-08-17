/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form";
import addTestImg from "../../../../assets/Dashboard-icons/pharmaceutical2.png";

const AddLabTest = () => {
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
          <img className="w-4/5 mx-auto" src={addTestImg} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="admission-form doctor-form"
        >
          <h3 className="text-center text-xl md:text-3xl font-semibold my-5 text-my-primary">
            Add A New Lab Test
          </h3>
          <div className="divider" />

          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Test Name</h4>
              <input
                required
                placeholder="Enter lab test name"
                type="text"
                {...register("labTestName")}
              />
            </div>
            <div>
              <h4>Enter fees</h4>
              <input
                required
                placeholder="Enter fees"
                type="text"
                {...register("fees")}
              />
            </div>
          </div>

          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Phone Number</h4>
              <input
                required
                type="text"
                placeholder="Enter lab's phone Number"
                {...register("PhoneNumber")}
              />
            </div>
            <div>
              <h4>Photo</h4>
              <input required type="file" {...register("photo")} />
            </div>
          </div>

          <div>
            <h4>Details About The Test</h4>
            <textarea
              name="labTest-details"
              placeholder="Write details about the test"
              cols="30"
              rows="5"
              className="labtest-details"
              {...register("labTest-details")}
            />
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

export default AddLabTest;
