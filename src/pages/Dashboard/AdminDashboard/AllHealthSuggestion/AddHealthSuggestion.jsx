import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addHealthTipsApi } from "../../../../Features/HealthTips/addHealthTips";

const AddHealthSuggestion = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Remove any image-related code if you don't want to upload images

    // Dispatch the action to add the health tip data
    dispatch(addHealthTipsApi({ data }));
  };
  return (
    <div className=" mt-8 bg-white box-shadow rounded-2xl p-10">
      <div className="grid grid-cols-1">
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
              <label className="text-sm font-semibold">Image</label>
              <input placeholder="Type Image URL Here" type="text" {...register("image")} className="input input-bordered w-full" />
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
