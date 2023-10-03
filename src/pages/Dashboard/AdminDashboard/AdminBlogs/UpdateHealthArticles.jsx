import JoditEditor from "jodit-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { updateBlogApi } from "../../../../Features/Blogs/updateBlog";

const UpdateHealthArticles = () => {
  const existingData = useLoaderData();
  const { _id } = existingData;
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    delete data._id;

    try {
      // Dispatch the Redux action to update the health article data
      const updateResponse = await dispatch(updateBlogApi({ _id, data }));

      // Check the response from the Redux action
      if (updateResponse.payload.modifiedCount > 0) {
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
      if (existingData) {
        setValue(field, existingData[field]);
      }
    }
  }, [existingData, setValue]);

  return (
    <div className="mt-8 bg-white box-shadow rounded-2xl p-10">
      <div className="grid grid-cols-1">
        <div className="">
          <h1 className="text-2xl text-center font-bold mb-10 font-nunito uppercase">Update Health Articles</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Title</span>
                </label>
                <input type="text" {...register("title")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Topic</span>
                </label>
                <input type="text" {...register("topic")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Image</label>
              <input type="text" {...register("image")} className="input input-bordered w-full" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Published date</span>
                </label>
                <input type="date" {...register("published_date")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Content</span>
                </label>
                <input type="text" {...register("content")} className="input input-bordered w-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Author</span>
                </label>
                <input type="text" {...register("author")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Author Image</span>
                </label>
                <input type="text" {...register("authorImage")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Section Title</span>
              </label>
              <input type="text" {...register("sectionTitle")} className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Content details</span>
              </label>
              <JoditEditor
                name="content_details"
                value={existingData.content_details || ""} // Set the initial value
                onBlur={(newContent) => {
                  setValue("content_details", newContent); // Update the form state
                }}
                config={
                  {
                    // Jodit editor configuration options
                    // You can configure it as needed
                  }
                }
              />
            </div>
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
