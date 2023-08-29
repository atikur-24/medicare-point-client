/* eslint-disable no-unused-vars */
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const categories = [
  { value: "Pain Relief", label: "Pain Relief" },
  { value: "Digestive Health", label: "Digestive Health" },
  { value: "Cough & Cold", label: "Cough & Cold" },
  { value: "Diabetes Care", label: "Diabetes Care" },
  { value: "Heart Health", label: "Heart Health" },
  { value: "Laundry & Household", label: "Laundry & Household" },
  { value: "Skin Care", label: "Skin Care" },
  { value: "Eye Care", label: "Eye Care" },
  { value: "Women Care", label: "Women Care" },
  { value: "Men's Products", label: "Men's Products" },
  { value: "Vitamins", label: "Vitamins" },
  { value: "Devices & Equipment", label: "Devices & Equipment" },
  { value: "Bone Health care", label: "Bone Health care" },
  { value: "Weight", label: "Weight" },
  { value: "Dental Care", label: "Dental Care" },
  { value: "Baby Care", label: "Baby Care" },
];

const tags = [
  { value: "Healthy", label: "Healthy" },
  { value: "Covid", label: "Covid" },
  { value: "Personal", label: "Personal" },
];

const AddNewMedicine = () => {
  //   const imageHostingKey = import.meta.env.VITE_API_KEY;
  //   const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const {
    register,
    control,
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
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="admission-form doctor-form"
      >
        <h3 className="text-center text-xl lg:text-3xl font-medium lg:font-semibold my-5 text-title-color tracking-wide">
          Add New Medicine
        </h3>
        <div className="divider" />
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Pharmacist Name</span>
            <input
              defaultValue="John Deo"
              type="text"
              {...register("pharmacist_name")}
            />
          </div>
          <div>
            <span>Pharmacist Email</span>
            <input
              readOnly
              defaultValue="john12@gmail.com"
              type="email"
              {...register("pharmacist_email")}
            />
          </div>
        </div>
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Medicine Name</span>
            <input
              placeholder="Enter medicine name"
              type="text"
              {...register("medicine_name")}
            />
          </div>
          <div>
            <span>Medicine Image</span>
            <input type="file" {...register("image")} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <span>Medicine Category</span>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categories}
                  placeholder="Select category"
                  noOptionsMessage={() => "No category found"}
                />
              )}
            />
          </div>
          <div>
            <span>Tags</span>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  {...field}
                  options={tags}
                  isMulti
                  placeholder="Select tags"
                />
              )}
            />
          </div>
        </div>
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Enter price</span>
            <input
              min={1}
              placeholder="Enter price"
              type="number"
              {...register("price")}
            />
          </div>
          <div>
            <span>Available Quantity</span>
            <input
              min={1}
              placeholder="Enter available quantity"
              type="number"
              {...register("available_quantity")}
            />
          </div>
        </div>
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Enter Discount</span>
            <input
              min={0}
              placeholder="Enter discount"
              type="number"
              {...register("discount")}
            />
          </div>
          <div>
            <span>Sku No.</span>
            <input
              placeholder="Enter sku"
              type="number"
              {...register("sku")}
            />
          </div>
        </div>
        <div>
          <input
            required
            className="submit-btn cursor-pointer"
            type="submit"
            value="Add Medicine"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewMedicine;
