import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { updateHealthTipsApi } from "../../../../Features/HealthTips/updateHealthTips";
// import updateHealthTips, { updateHealthTipsApi } from "../../../../Features/HealthTips/updateHealthTips";

const UpdateHealthTips = () => {
  const existingData = useLoaderData();
  const { _id } = existingData;
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  //   const onSubmit = (data) => {
  //     // Update the fields you want to change in existingData
  //     const updatedData = {
  //       ...existingData,
  //       ...data,
  //     };

  //     // Image Upload (similar to the AddHealthSuggestion component)
  //     const image = data.image[0];
  //     const formData = new FormData();
  //     formData.append("image", image);
  //     const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
  //     fetch(url, {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((imageData) => {
  //         updatedData.image = imageData.data.display_url;
  //         dispatch(updateHealthTipsApi({ updatedData }));
  //         console.log("Updated Health Tip:", updatedData);
  //       });
  //   };

  const onSubmit = async (data) => {
    const image = data.image[0];
    console.log(data._id);
    console.log(_id);

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
        console.log(data);
        data.image = imageData.data.display_url;
        // dispatch(updateHealthTipsApi({ _id, data })); // using redux
        axios.patch(`http://localhost:5000/allHealthTips/${data._id}`, data).then((res) => console.log(res.data));
      });
  };

  // Set default form values with existing data
  useEffect(() => {
    for (const field in existingData) {
      if (existingData.hasOwnProperty(field)) {
        setValue(field, existingData[field]);
      }
    }
  }, [existingData, setValue]);

  return (
    <div className="text-center">
      <div className="grid grid-cols-1">
        <div className="bg-gray-3 p-2">
          <h1 className="text-2xl font-bold py-2">Update Health Tip</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Similar input fields with pre-filled values */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Category</label>
                <input type="text" {...register("category")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input type="text" {...register("name")} className="input input-bordered w-full" />
              </div>
            </div>
            {/* Other input fields */}
            <div>
              <label className="text-sm font-semibold">Image</label>
              <input type="file" {...register("image")} className="file-input file-input-bordered file-input-accent w-full" />
            </div>
            {/* ... Repeat for other fields */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Type</label>
                <input type="text" {...register("type")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">Cause</label>
                <input type="text" {...register("cause")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Prevention</label>
              <textarea {...register("prevention")} className="textarea textarea-bordered w-full" />
            </div>
            <div>
              <label className="text-sm font-semibold">Cure</label>
              <textarea {...register("cure")} className="textarea textarea-bordered w-full" />
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
