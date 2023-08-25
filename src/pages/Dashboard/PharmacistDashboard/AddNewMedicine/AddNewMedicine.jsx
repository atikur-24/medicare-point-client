/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { ImWarning } from "react-icons/im";

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
    <div className="max-w-full mx-auto">
      <div className="w-full">
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
              <h4>Medicine Name</h4>
              <input
                required
                placeholder="Enter medicine name"
                type="text"
                {...register("medicineName")}
              />
            </div>
            <div>
              <h4>Medicine Photo</h4>
              <input required type="file" {...register("photo")} />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Supplier Name</h4>
              <input
                required
                placeholder="Enter supplier name"
                type="text"
                {...register("supplier")}
              />
            </div>
            <div>
              <h4>Supplier Email</h4>
              <input
                required
                placeholder="Enter your email"
                type="supplierEmail"
                {...register("email")}
              />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Supplier Phone Number</h4>
              <input
                required
                type="text"
                placeholder="Enter your phone Number"
                {...register("supplierPhoneNumber")}
              />
            </div>
            <div>
              <h4>Available Quantity</h4>
              <input
                required
                placeholder="Enter quantity"
                type="number"
                {...register("quantity")}
              />
            </div>
          </div>
          <div className="two-input-field lg:flex gap-5">
            <div>
              <h4>Enter price</h4>
              <input
                required
                placeholder="Enter price"
                type="text"
                {...register("price")}
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
    </div>
  );
};

export default AddNewMedicine;
