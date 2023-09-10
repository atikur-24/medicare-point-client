import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateLabTestApi } from "../../../../Features/AllLabTests/updateLabTest";
import "./LabTest.css";

const UpdateLabTest = ({ singleData }) => {
  // const a = useSelector((state) => state.updateLabTest.response);
  // console.log(a);
  const dispatch = useDispatch();

  const { _id, image_url, category_name, test_name, price, discount, category, PhoneNumber, labNames, city, labTestDetails } = singleData;

  const labCategories = [
    "Pregnancy",

    "Blood Studies",

    "Tax Saver",

    "Allergy",

    "Bone",

    "Men's Health",

    "Infection",

    "Vitamins",

    "Fever",

    "Covid",

    "Full Body Checkup",

    "Women Health",

    "Diabetes",

    "Kidney",

    "Heart",

    "X-ray MRI CT Ultrasound",
  ];

  const labCategories2 = ["Popular", "Normal"];

  const onSubmit = async (data) => {
    data.price = parseInt(data.price, 10);
    data.discount = parseInt(data.discount, 10);
    // const disPrice = (data.price * data.discount) / 100;
    // const remaining = parseInt(data.price - disPrice, 10);
    // data.remaining = remaining;

    // console.log(data);

    const image = data.image_url[0];

    const formData = new FormData();
    formData.append("image", image);
    // console.log("img", formData);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        data.image_url = imageData.data.display_url;
        dispatch(updateLabTestApi({ _id, data })); // using redux
      });
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 md:w-3/5 max-w-5xl md:flex justify-around items-start p-5 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="admission-form update-form">
            <h3 className="text-center text-xl md:text-3xl font-semibold my-5 text-my-primary">Update Lab Test</h3>
            <div className="divider" />

            <div className="two-input-field lg:flex gap-5">
              <div>
                <h4>Test Name</h4>
                <input defaultValue={test_name} placeholder="Enter lab test name" type="text" {...register("test_name")} />
              </div>
              <div>
                <h4>Price</h4>
                <input defaultValue={price} placeholder="Enter lab test name" type="number" {...register("price")} />
              </div>
              <div>
                <h4>Discount </h4>
                <input defaultValue={discount} placeholder="Enter fees" type="number" {...register("discount")} />
              </div>
            </div>

            <div className="two-input-field lg:flex gap-5">
              <div>
                <h4>Category Name</h4>
                <select defaultValue={category_name} {...register("category_name")} className="select select-bordered">
                  {labCategories.map((option) => (
                    <option key={option} value={category_name}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h4>Phone Number</h4>
                <input defaultValue={PhoneNumber} type="text" {...register("PhoneNumber")} />
              </div>
            </div>

            <div className="two-input-field lg:flex gap-5">
              <div>
                <h4>City</h4>
                <input type="text" defaultValue={city} {...register("city")} />
              </div>
              <div>
                <h4>All labs (separated by &)</h4>
                <input type="text" placeholder="Enter lab names" defaultValue={labNames} {...register("labNames")} />
              </div>
            </div>

            <div className="two-input-field lg:flex gap-5">
              <div>
                <h4>Gender</h4>
                <select {...register("gender")} className="select select-bordered w-full max-w-md outline-none">
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div>
                <h4>Age</h4>
                <input type="number" placeholder="Enter Age" {...register("age")} />
              </div>
            </div>

            <div className="two-input-field lg:flex gap-5">
              <div>
                <h4>Category</h4>
                <select defaultValue={category} {...register("category")} className="select select-bordered">
                  {labCategories2.map((option) => (
                    <option key={option} value={category}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h4>Photo</h4>
                <input type="file" {...register("image_url")} defaultValue={image_url} />
              </div>
            </div>

            <div>
              <h4>Details About The Test</h4>
              <textarea
                name="labTestDetails"
                placeholder="Write details about the test"
                cols="30"
                rows="5"
                className="labTestDetails border border-gray-3"
                defaultValue={labTestDetails}
                {...register("labTestDetails")}
              />
            </div>

            <div>
              <button className="my-btn  w-full" type="submit">
                UPDATE
              </button>
            </div>
          </form>

          <div className="modal-action">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red bg-red-500 hover:bg-red-400 text-white">
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLabTest;
