/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form";
import addDoctorImg from "../../../../assets/Dashboard-icons/syringe.png";

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
    <div className="max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <img className="w-4/5 mx-auto" src={addDoctorImg} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="admission-form doctor-form"
        >
          <h3 className="text-center text-3xl font-semibold my-5 text-my-primary">
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
              <h4>Generic</h4>
              <input
                required
                placeholder="Enter generic"
                type="text"
                {...register("generic")}
              />
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
            <div>
              <h4>Photo</h4>
              <input required type="file" {...register("photo")} />
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
