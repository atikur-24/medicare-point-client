/* eslint-disable no-unused-vars */
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { addLabTestApi } from "../../../../Features/AllLabTests/addLabTest";
import addTestImg from "../../../../assets/Dashboard-icons/pharmaceutical2.png";

const cities = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Jessore", label: "Jessore" },
  { value: "Dinajpur", label: "Dinajpur" },
  { value: "Gopalganj", label: "Gopalganj" },
  { value: "Gazipur", label: "Gazipur" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Comilla", label: "Comilla" },
  { value: "Barisal", label: "Barisal" },
  { value: "Narayanganj", label: "Narayanganj" },
  { value: "Faridpur", label: "Faridpur" },
  { value: "Bogra", label: "Bogra" },
  { value: "Pabna", label: "Pabna" },
  { value: "Rangamati", label: "Rangamati" },
  { value: "Kushtia", label: "Kushtia" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Manikganj", label: "Manikganj" },
  { value: "Noakhali", label: "Noakhali" },
  { value: "Khulna", label: "Khulna" },
  { value: "Tangail", label: "Tangail" },
  { value: "Panchagarh", label: "Panchagarh" },
  { value: "Bhola", label: "Bhola" },
  { value: "Bandarban", label: "Bandarban" },
  { value: "Chandpur", label: "Chandpur" },
  { value: "Habiganj", label: "Habiganj" },
  { value: "Lakshmipur", label: "Lakshmipur" },
  { value: "Barguna", label: "Barguna" },
  { value: "Jhalokati", label: "Jhalokati" },
  { value: "Pirojpur", label: "Pirojpur" },
  { value: "Patuakhali", label: "Patuakhali" },
  { value: "Jhenaidah", label: "Jhenaidah" },
  { value: "Narail", label: "Narail" },
  { value: "Magura", label: "Magura" },
  { value: "Lalmonirhat ", label: "Lalmonirhat" },
  { value: "Kurigram", label: "Kurigram" },
  { value: "Nilphamari", label: "Nilphamari" },
  { value: "Gaibandha", label: "Gaibandha" },
  { value: "Thakurgaon", label: "Thakurgaon" },
  { value: "Satkhira", label: "Satkhira" },
  { value: "Bagerhat", label: "Bagerhat" },
  { value: "Chuadanga", label: "Chuadanga" },
  { value: "Meherpur", label: "Meherpur" },
  { value: "Sirajganj", label: "Sirajganj" },
  { value: "Joypurhat", label: "Joypurhat" },
  { value: "Natore", label: "Natore " },
  { value: "Naogaon", label: "Naogaon" },
  { value: "Nawabganj", label: "Nawabganj" },
  { value: "Khagrachhari", label: "Khagrachhari" },
  { value: "Feni", label: "Feni" },
  { value: "Brahmanbaria", label: "Brahmanbaria" },
  { value: "Sunamganj", label: "Sunamganj" },
  { value: "Moulvibazar", label: "Moulvibazar" },
  { value: "Shariatpur", label: "Shariatpur" },
  { value: "Madaripur", label: "Madaripur" },
  { value: "Rajbari", label: "Rajbari" },
  { value: "Kishoreganj", label: "Kishoreganj" },
  { value: "Jamalpur", label: "Jamalpur" },
  { value: "Sherpur", label: "Sherpur" },
  { value: "Netrakona", label: "Netrakona" },
  { value: "Munshiganj", label: "Munshiganj" },
  { value: "Narsingdi", label: "Narsingdi" },
];

// ToDo Page Design
const AddLabTest = () => {
  const dispatch = useDispatch();
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
  const labCategory = ["Popular", "Normal"];

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
    data.price = parseInt(data.price, 10);
    data.discount = parseInt(data.discount, 10);
    // const price = (data.price * data.discount) / 100;
    // const remaining = parseInt(data.price - price, 10);
    // data.remaining = remaining;

    // Image Upload
    const image = data.image_url[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        data.image_url = imageData.data.display_url;
        dispatch(addLabTestApi({ data, reset }));
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <img className="w-4/5 mx-auto" src={addTestImg} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="admission-form doctor-form">
          <h3 className="text-center text-xl md:text-3xl font-semibold my-5 text-my-primary">Add A New Lab Test</h3>
          <div className="divider" />

          <div className="two-input-field lg:flex gap-5">
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Test Name</span>
              </label>
              <input required placeholder="Enter lab test name" type="text" {...register("test_name")} className="w-full max-w-md  outline-none" />
            </div>
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Price</span>
              </label>
              <input required placeholder="Enter lab test name" type="number" {...register("price")} className="w-full max-w-md outline-none" />
            </div>
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Discount</span>
              </label>
              <input required placeholder="Enter fees" defaultValue={0} type="number" {...register("discount")} className="w-full max-w-md outline-none" />
            </div>
          </div>

          <div className="two-input-field lg:flex gap-5">
            <div>
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Category Name</span>
              </label>
              <select {...register("category_name", { required: true })} className="select select-bordered w-full max-w-md outline-none">
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
              <input required type="text" placeholder="Enter lab's phone Number" {...register("PhoneNumber")} className="w-full max-w-md outline-none" />
            </div>
          </div>

          <div className=" lg:flex gap-5">
            <div className="md:w-1/2">
              <h4>City</h4>
              <div>
                <Controller name="city" control={control} render={({ field }) => <CreatableSelect required {...field} options={cities} isMulti placeholder="Select city" />} />
              </div>
            </div>
            <div className="md:w-1/2">
              <h4>All labs (separated by &)</h4>
              <input type="text" placeholder="Enter lab names" {...register("labNames")} />
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
            <div className="">
              <label className="label">
                <span className="label-text md:text-base font-bold font-nunito">Category</span>
              </label>
              <select {...register("category", { required: true })} className="select select-bordered w-full max-w-md">
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

              <input required type="file" {...register("image_url")} className="w-full  max-w-md " />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text md:text-base font-bold font-nunito">Details About The Test</span>
            </label>
            <textarea name="labTest-details" placeholder="Write details about the test" cols="30" rows="5" className="labtest-details" {...register("labTest-details")} />
          </div>

          <div>
            <button type="submit" className="my-btn w-full">
              sumbit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLabTest;
