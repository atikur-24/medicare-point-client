import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import addTestImg from "../../../../assets/Dashboard-icons/pharmaceutical2.png";

const UpdateLab = () => {
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

  const { _id, image_url, category_name, test_name, price, discount, category } = useLoaderData();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <img className="w-4/5 mx-auto" src={addTestImg} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="admission-form doctor-form">
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
              <select defaultValue={category_name} {...register("category_name", { required: true })} className="select select-bordered">
                {labCategories.map((option) => (
                  <option key={option} value={category_name}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h4>Phone Number</h4>
              <input type="text" placeholder="Enter lab's phone Number" {...register("PhoneNumber")} />
            </div>
          </div>

          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Category</h4>
              <select defaultValue={category_name} {...register("category", { required: true })} className="select select-bordered">
                {labCategories.map((option) => (
                  <option key={option} value={category_name}>
                    {option}
                  </option>
                ))}
              </select>
              {/* <select defaultValue="option2">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select> */}
            </div>
            <div>
              <h4>Photo</h4>
              <input type="file" {...register("image_url")} />
            </div>
          </div>

          <div>
            <h4>Details About The Test</h4>
            <textarea name="labTest-details" placeholder="Write details about the test" cols="30" rows="5" className="labtest-details" {...register("labTest-details")} />
          </div>

          <div>
            <input className="submit-btn cursor-pointer" type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateLab;
