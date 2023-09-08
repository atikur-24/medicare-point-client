import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addHealthTipsApi } from "../../../../Features/HealthTips/addHealthTips";

const AddHealthSuggestion = () => {
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
        dispatch(addHealthTipsApi({ data }));
        console.log(data);
      });
    console.log("New Health Tip:", data);
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-1">
        <div>
          <img className="w-full hidden" src="https://st2.depositphotos.com/1561359/6865/v/450/depositphotos_68650923-stock-illustration-doctor-writing-healthy-tips-words.jpg" alt="" />
        </div>
        <div className="bg-gray-3 p-2">
          <h1 className="text-2xl font-bold py-2">Add A New Health Tips</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <div>
              <label className="text-sm font-semibold">Image</label>
              <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent w-full" />
            </div>
            <div>
              <label className="text-sm font-semibold">Image</label>
              <input type="text" {...register("image")} className="input input-bordered w-full" />
            </div>
            {/* Repeat for other fields */}
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
              Add Health Tip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHealthSuggestion;
