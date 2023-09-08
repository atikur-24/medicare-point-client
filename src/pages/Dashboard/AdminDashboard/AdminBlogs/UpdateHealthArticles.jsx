import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateHealthArticles = () => {
  const existingData = useLoaderData();
  const { _id } = existingData;
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    delete data._id;
    // const image = data.image[0];

    const formData = new FormData();
    // formData.append("image", image);

    // const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    try {
      const response = await fetch({
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      // const imageData = await response.json();
      // data.image = imageData.data.display_url;

      // Update health tip data using axios
      const updateResponse = await axios.put(`http://localhost:5000/blogs/${_id}`, data);

      if (updateResponse.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "Health Article has been updated successfully!",
        });
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "An error occurred while updating the health article.",
      });
    }
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
          <h1 className="text-2xl font-bold py-2">Update Health Articles</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Similar input fields with pre-filled values */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Title</label>
                <input type="text" {...register("title")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">Topic</label>
                <input type="text" {...register("topic")} className="input input-bordered w-full" />
              </div>
            </div>
            {/* Other input fields */}
            <div>
              <label className="text-sm font-semibold">Image</label>
              <input type="text" {...register("image")} className="input input-bordered w-full" />
            </div>
            {/* <div>
              <label className="text-sm font-semibold">Image</label>
              <input type="file" {...register("image")} className="file-input file-input-bordered file-input-accent w-full" />
            </div> */}
            {/* ... Repeat for other fields */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Published date</label>
                <input type="text" {...register("published_date")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">Content</label>
                <input type="text" {...register("content")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Content details</label>
              <textarea {...register("content_details")} className="textarea textarea-bordered w-full" />
            </div>
            {/* <div>
              <label className="text-sm font-semibold">Cure</label>
              <textarea {...register("cure")} className="textarea textarea-bordered w-full" />
            </div> */}
            <button type="submit" className="my-btn">
              Update Health Articles
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateHealthArticles;
