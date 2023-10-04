import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleLabtest } from "../../../../Features/AllLabTests/singleLabtest";
import { updateLabTestApi } from "../../../../Features/AllLabTests/updateLabTest";
import "./LabTest.css";

const UpdateLabTest = ({ id }) => {
  // const a = useSelector((state) => state.updateLabTest.response);
  // console.log(a);
  const [singleData, setSingleData] = useState({});
  const dispatch = useDispatch();
  const editor = useRef(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchSingleLabtest(id)).then((res) => {
      setSingleData(res.payload);
      setDescription(res.payload?.labTestDetails);
    });
  }, [dispatch, id]);

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

  const labCategories2 = ["Popular", "Normal"];

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm();

  // Set default form values with existing data
  useEffect(() => {
    if (!singleData) {
      return;
    }
    for (const field in singleData) {
      if (singleData) {
        setValue(field, singleData[field]);
      }
    }
  }, [singleData, setValue]);

  const onSubmit = async (data) => {
    data.price = parseInt(data.price, 10);
    data.discount = parseInt(data.discount, 10);
    data.labTestDetails = description;
    dispatch(updateLabTestApi({ _id: id, data })); // using redux
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl items-start justify-around rounded-lg p-5 shadow-lg md:flex md:w-3/5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" box-shadow rounded-2xl bg-white p-6"
          >
            <h3 className="my-5 text-center text-xl font-semibold text-my-primary md:text-3xl">
              Update Lab Test
            </h3>
            <div className="divider" />

            <div className="two-input-field gap-5 lg:flex">
              <div>
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Test Name
                  </span>
                </label>
                <input
                  required
                  placeholder="Enter lab test name"
                  type="text"
                  {...register("test_name")}
                  className="input input-bordered  w-full  max-w-md outline-none focus:outline-none "
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Price
                  </span>
                </label>
                <input
                  required
                  placeholder="Enter lab test name"
                  type="number"
                  {...register("price")}
                  className="input input-bordered w-full  max-w-md outline-none focus:outline-none"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Discount
                  </span>
                </label>
                <input
                  required
                  placeholder="Enter fees"
                  defaultValue={0}
                  type="number"
                  {...register("discount")}
                  className="input input-bordered w-full  max-w-md outline-none focus:outline-none"
                />
              </div>
            </div>

            <div className="two-input-field gap-5 lg:flex">
              <div>
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Category Name
                  </span>
                </label>
                <select
                  {...register("category_name", { required: true })}
                  className="select select-bordered w-full max-w-md outline-none  focus:outline-none "
                >
                  {labCategories.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Phone Number
                  </span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter lab's phone Number"
                  {...register("PhoneNumber")}
                  className="input input-bordered w-full  max-w-md outline-none focus:outline-none"
                />
              </div>
            </div>

            <div className=" gap-5 lg:flex">
              <div className="md:w-1/2">
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Report
                  </span>
                </label>
                <div>
                  {/* <Controller name="city" control={control} render={({ field }) => <CreatableSelect required {...field} options={cities} isMulti placeholder="Select city" />} /> */}

                  <input
                    className="input input-bordered w-full max-w-md outline-none  focus:outline-none"
                    type="number"
                    placeholder="Enter Report Time"
                    {...register("report")}
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    All labs (separated by &)
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-md outline-none  focus:outline-none"
                  type="text"
                  placeholder="Enter lab names"
                  {...register("labNames")}
                />
              </div>
            </div>
            <div className="two-input-field gap-5 lg:flex">
              <div>
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Gender
                  </span>
                </label>
                <select
                  {...register("gender")}
                  className="select select-bordered w-full max-w-md outline-none  focus:outline-none"
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="both">both</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Age
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-md outline-none  focus:outline-none"
                  max="80"
                  min="0"
                  type="number"
                  placeholder="Enter Age"
                  {...register("age")}
                />
              </div>
            </div>

            <div className="two-input-field gap-5 lg:flex">
              <div className="">
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Category
                  </span>
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full max-w-md focus:outline-none "
                >
                  {labCategories2.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-btn">
                <label className="label">
                  <span className="label-text font-nunito font-bold md:text-base">
                    Photo
                  </span>
                </label>
                <input
                  placeholder="Photo Url"
                  required
                  type="url"
                  {...register("image_url")}
                  className="input input-bordered w-full max-w-md outline-none  focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-nunito font-bold md:text-base">
                  Details About The Test
                </span>
              </label>
              <JoditEditor
                ref={editor}
                value={description}
                onChange={(newContent) => setDescription(newContent)}
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <button type="submit" className="my-btn ">
                sumbit
              </button>
              {/* <input type="reset" value="Reset" className="btn btn-error" /> */}
            </div>
          </form>

          <div className="modal-action">
            <label
              htmlFor="my-modal-3"
              className="btn btn-circle btn-sm absolute right-2 top-2  bg-red-500 text-white hover:bg-red-400"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLabTest;
