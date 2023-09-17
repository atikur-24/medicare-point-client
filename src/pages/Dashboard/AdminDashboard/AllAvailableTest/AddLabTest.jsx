/* eslint-disable no-unused-vars */
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { addLabTestApi } from "../../../../Features/AllLabTests/addLabTest";
import addTestImg from "../../../../assets/Dashboard-icons/pharmaceutical2.png";

// ToDo Page Design
const AddLabTest = () => {
  const dispatch = useDispatch();
  const labCategories = [
    "Liver Function",
    "Basic Wellness",
    "Drug & Alcohol",
    "Digestive System",
    "Hormone",
    "Immunology",
    "Mineral Deficiency",
    "Thyroid",
    "Blood Studies",
    "Allergy",
    "Men's Health",
    "Infection",
    "Vitamins",
    "Fever",
    "Covid",
    "Women Health",
    "Diabetes",
    "Kidney",
    "Heart",
  ];
  const labCategory = ["Popular", "Normal"];
  const editor = useRef(null);
  const [description, setDescription] = useState("");

  const [errorDesc, setErrorDesc] = useState("");

  //   const imageHostingKey = import.meta.env.VITE_API_KEY;
  //   const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErrorDesc("");
    data.price = parseInt(data.price, 10);
    data.discount = parseInt(data.discount, 10);
    data.labTestDetails = description;
    // const price = (data.price * data.discount) / 100;
    // const remaining = parseInt(data.price - price, 10);
    // data.remaining = remaining;
    if (!description) {
      setErrorDesc("Please fill out medicine description field");
      return;
    }
    dispatch(addLabTestApi({ data, reset }));
    setDescription("");
    // // Image Upload
    // const image = data.image_url[0];

    // const formData = new FormData();
    // formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imageData) => {
    //     data.image_url = imageData.data.display_url;

    //   });
  };

  return (
    <div className=" py-4 max-w-5xl mx-auto">
      <div className="w-full ">
        <form onSubmit={handleSubmit(onSubmit)} className=" rounded-2xl box-shadow bg-white p-6">
          <h3 className="text-center text-xl md:text-3xl font-semibold my-5 text-my-primary">Add A New Lab Test</h3>
          <div className="divider" />

          <div className="two-input-field lg:flex gap-5">
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Test Name</span>
              </label>
              <input
                required
                placeholder="Enter lab test name"
                type="text"
                {...register("test_name")}
                className="w-full max-w-md  outline-none  input input-bordered focus:outline-none "
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Price</span>
              </label>
              <input required placeholder="Enter lab test name" type="number" {...register("price")} className="w-full max-w-md focus:outline-none  outline-none input input-bordered" />
            </div>
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Discount</span>
              </label>
              <input required placeholder="Enter fees" defaultValue={0} type="number" {...register("discount")} className="w-full max-w-md focus:outline-none  outline-none input input-bordered" />
            </div>
          </div>

          <div className="two-input-field lg:flex gap-5">
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Category Name</span>
              </label>
              <select {...register("category_name", { required: true })} className="select select-bordered w-full max-w-md focus:outline-none  outline-none ">
                {labCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Phone Number</span>
              </label>
              <input required type="text" placeholder="Enter lab's phone Number" {...register("PhoneNumber")} className="w-full max-w-md focus:outline-none  outline-none input input-bordered" />
            </div>
          </div>

          <div className=" lg:flex gap-5">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Report</span>
              </label>
              <div>
                {/* <Controller name="city" control={control} render={({ field }) => <CreatableSelect required {...field} options={cities} isMulti placeholder="Select city" />} /> */}

                <input className="input input-bordered w-full max-w-md focus:outline-none  outline-none" type="number" placeholder="Enter Report Time" {...register("report")} />
              </div>
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">All labs (separated by &)</span>
              </label>
              <input className="input input-bordered w-full max-w-md focus:outline-none  outline-none" type="text" placeholder="Enter lab names" {...register("labNames")} />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Gender</span>
              </label>
              <select {...register("gender")} className="select select-bordered w-full max-w-md focus:outline-none  outline-none">
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="both">both</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Age</span>
              </label>
              <input className="input input-bordered w-full max-w-md focus:outline-none  outline-none" max="80" min="0" type="number" placeholder="Enter Age" {...register("age")} />
            </div>
          </div>

          <div className="two-input-field lg:flex gap-5">
            <div className="">
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Category</span>
              </label>
              <select {...register("category", { required: true })} className="select select-bordered w-full max-w-md focus:outline-none ">
                {labCategory.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-btn">
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Photo</span>
              </label>
              <input placeholder="Photo Url" required type="url" {...register("image_url")} className="input input-bordered w-full max-w-md focus:outline-none  outline-none" />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text md:text-base font-bold font-nunito">Details About The Test</span>
            </label>
            <JoditEditor ref={editor} value={description} onChange={(newContent) => setDescription(newContent)} />
            <small className="text-red-500">{errorDesc}</small>
          </div>

          {/* <div>
            <label className="label">
              <span className="label-text md:text-base font-bold font-nunito">Details About The Test</span>
            </label>
            <textarea name="labTestDetails" placeholder="Write details about the test" cols="30" rows="5" className="labtest-details" {...register("labTestDetails")} />
          </div> */}

          <div className="flex items-center gap-4 mt-4">
            <button type="submit" className="my-btn ">
              sumbit
            </button>
            <input type="reset" value="Reset" className="btn btn-error" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLabTest;
