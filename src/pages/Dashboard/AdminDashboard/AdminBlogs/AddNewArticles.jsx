import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBlogApi } from "../../../../Features/Blogs/addBlog";

const AddNewArticles = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Image Upload
    const image = data.image[0];
    // console.log(image);
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
        dispatch(addBlogApi({ data }));
      });
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-1">
        <div>
          <img className="w-full hidden" src="https://st2.depositphotos.com/1561359/6865/v/450/depositphotos_68650923-stock-illustration-doctor-writing-healthy-tips-words.jpg" alt="" />
        </div>
        <div className="bg-gray-3 p-2">
          <h1 className="text-2xl font-bold py-2">Add A New Articles</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Title</label>
                <input type="text" {...register("title")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">topic</label>
                <input type="text" {...register("topic")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Image</label>
              <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent w-full" />
            </div>
            {/* Repeat for other fields */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">published_date</label>
                <input type="text" {...register("published_date")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">Content</label>
                <input type="text" {...register("content")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Content_details</label>
              <textarea {...register("content_details")} className="textarea textarea-bordered w-full" />
            </div>
            <button type="submit" className="my-btn">
              Add Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewArticles;
