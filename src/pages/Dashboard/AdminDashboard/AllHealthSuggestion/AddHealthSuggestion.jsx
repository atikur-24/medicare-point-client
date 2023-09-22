import JoditEditor from "jodit-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addHealthTipsApi } from "../../../../Features/HealthTips/addHealthTips";

const AddHealthSuggestion = () => {
  const { register, handleSubmit, reset } = useForm();
  const [cause, setCause] = useState("");
  const [prevention, setPrevention] = useState("");
  const [cure, setCure] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.prevention = prevention;
    data.cure = cure;
    data.cause = cause;
    // Dispatch the action to add the health tip data
    dispatch(addHealthTipsApi({ data }));
  };

  const handleReset = () => {
    reset();
    setCause("");
    setPrevention("");
    setCure("");
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
                <input required type="text" placeholder="Type here" {...register("category")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>

                <input required type="text" placeholder="Type here" {...register("name")} className="input input-bordered w-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-semibold">Image</label>
                <input required placeholder="Type Image URL Here" type="text" {...register("image")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="text-sm font-semibold">Date</label>
                <input required placeholder="date" type="date" {...register("date")} className="input input-bordered w-full" />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold w-full">Type</span>
              </label>

              <input required type="text" placeholder="Type here" {...register("type")} className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-bold">Cause</span>
              </label>
              <JoditEditor
                name="cause"
                value={cause}
                onChange={(newContent) => {
                  setCause(newContent);
                }}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Prevention</span>
              </label>
              <JoditEditor
                name="prevention"
                value={prevention}
                onChange={(newContent) => {
                  setPrevention(newContent);
                }}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Cure</span>
              </label>
              <JoditEditor
                name="cure"
                value={cure}
                onChange={(newContent) => {
                  setCure(newContent);
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text font-bold">Name of Doctor</span>
                </label>

                <input required type="text" placeholder="Type here" {...register("doctorName")} className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Speciality of Doctor</span>
                </label>
                <input required type="text" placeholder="Type here" {...register("doctorDepartment")} className="input input-bordered w-full" />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button type="submit" className="my-btn">
                Add Health Tip
              </button>
              <input onClick={handleReset} type="reset" value="Reset" className="btn btn-error" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHealthSuggestion;
