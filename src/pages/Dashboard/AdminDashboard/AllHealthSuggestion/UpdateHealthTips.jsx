import axios from "axios";
import JoditEditor from "jodit-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateHealthTips = () => {
  const existingData = useLoaderData();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    // formData.append("image", image);

    // const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    try {
      const response = await fetch({
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      // const imageData = await response.json();
      // data.image = imageData.data.display_url;

      // Update health tip data using axios
      const updateResponse = await axios.put(`http://localhost:5000/allHealthTips/${data._id}`, data);

      if (updateResponse.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "Health tip has been updated successfully!",
        });
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "An error occurred while updating the health tip.",
      });
    }
  };

  // Set default form values with existing data
  useEffect(() => {
    for (const field in existingData) {
      if (existingData) {
        setValue(field, existingData[field]);
      }
    }
  }, [existingData, setValue]);

  return (
    <div className="mt-8 bg-white box-shadow rounded-2xl p-10">
      <div className="grid grid-cols-1">
        <div className="">
          <h1 className="text-2xl text-center font-bold mb-10 font-nunito uppercase">Update Health Tip</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <input type="text" {...register("category")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input type="text" {...register("name")} className="input input-bordered w-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Image</label>
                <input type="text" {...register("image")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">Date</label>
                <input type="date" {...register("date")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold w-full">Type</span>
              </label>
              <input type="text" {...register("type")} className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Cause</span>
              </label>
              <JoditEditor
                name="cause"
                value={existingData.cause || ""} // Set the initial value
                onBlur={(newContent) => {
                  setValue("cause", newContent); // Update the form state
                }}
                config={
                  {
                    // Jodit editor configuration options
                    // You can configure it as needed
                  }
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Prevention</span>
              </label>
              <JoditEditor
                name="prevention"
                value={existingData.prevention || ""} // Set the initial value
                onBlur={(newContent) => {
                  setValue("prevention", newContent); // Update the form state
                }}
                config={
                  {
                    // Jodit editor configuration options
                    // You can configure it as needed
                  }
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Cure</span>
              </label>
              <JoditEditor
                name="cure"
                value={existingData.cure || ""} // Set the initial value
                onBlur={(newContent) => {
                  setValue("cure", newContent); // Update the form state
                }}
                config={
                  {
                    // Jodit editor configuration options
                    // You can configure it as needed
                  }
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Name of Doctor</span>
                </label>

                <input type="text" placeholder="Type here" {...register("doctorName")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Speciality of Doctor</span>
                </label>
                <input type="text" placeholder="Type here" {...register("doctorDepartment")} className="input input-bordered w-full" />
              </div>
            </div>
            <button type="submit" className="my-btn">
              Update Health Tip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateHealthTips;
