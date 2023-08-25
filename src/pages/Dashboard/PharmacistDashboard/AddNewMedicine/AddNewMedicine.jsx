/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const AddNewMedicine = () => {
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
              required
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
              required
              placeholder="Enter medicine name"
              type="text"
              {...register("medicine_name")}
            />
          </div>
          <div>
            <span>Medicine Image</span>
            <input required type="file" {...register("image")} />
          </div>
        </div>
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Medicine Category</span>
            <input
              required
              type="text"
              placeholder="Medicine category"
              {...register("category")}
            />
          </div>
          <div>
            <span>Tags</span>
            <input
              required
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
              required
              placeholder="Enter price"
              type="number"
              {...register("price")}
            />
          </div>
          <div>
            <span>Available Quantity</span>
            <input
              min={1}
              required
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
              required
              placeholder="Enter discount"
              type="number"
              {...register("discount")}
            />
          </div>
          <div>
            <span>SKU</span>
            <input
              required
              placeholder="Enter sku"
              type="text"
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
