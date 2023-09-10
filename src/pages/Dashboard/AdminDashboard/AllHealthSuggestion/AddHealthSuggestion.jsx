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
      });
  };

  return (
    <div className=" mt-8 bg-white box-shadow rounded-2xl p-10">
      <div className="grid grid-cols-1">
        {/* <div>
          <img className="w-full hidden" src="https://st2.depositphotos.com/1561359/6865/v/450/depositphotos_68650923-stock-illustration-doctor-writing-healthy-tips-words.jpg" alt="" />
        </div> */}
        <div className="">
          <h1 className="text-2xl text-center font-bold mb-10 font-nunito uppercase">Add A New Health Tips</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <input type="text" placeholder="Type here" {...register("category")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>

                <input type="text" placeholder="Type here" {...register("name")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent w-full" />
            </div>
            {/* Repeat for other fields */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Type</span>
                </label>

                <input type="text" placeholder="Type here" {...register("type")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Cause</span>
                </label>
                <input type="text" placeholder="Type here" {...register("cause")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Prevention</span>
              </label>
              <textarea {...register("prevention")} placeholder="Type here" className="textarea textarea-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Cure</span>
              </label>
              <textarea {...register("cure")} placeholder="Type here" className="textarea textarea-bordered w-full" />
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
