/* eslint-disable no-unused-vars */
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
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
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Medicine Category</span>
            <input
              type="text"
              placeholder="Medicine category"
              {...register("category")}
            />
          </div>
          <div>
            <span>Tags</span>
            <input
              placeholder="Enter tags"
              type="text"
              {...register("tags")}
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
            <span>SKU</span>
            <input
              placeholder="Enter sku"
              type="text"
              {...register("sku")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <select {...register("Title", { required: true })}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div>
            <Select options={options} {...register("cte")} />
          </div>
        </div>
        <div>
          {/* <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          /> */}
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            )}
          />
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
