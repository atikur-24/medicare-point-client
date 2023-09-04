import { setHours, setMinutes } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import LabBanner from "../LabBanner/LabBanner";
import LabOrder from "../LabOrder/LabOrder";

const LabPayment = () => {
  const [selectesDate, setSelectedDate] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 17));
  // const [startDate, setStartDate] = useState((new Date(), 30), 17);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <LabBanner />
      <div className="my-container">
        <div className="bg-lite p-4 md:p-14 rounded-lg flex flex-col md:flex-row justify-center ">
          <div className=" md:w-1/2">
            <div className="space-y-4">
              <p className="font-semibold">PATHOLOGY TESTS (1)</p>
              {/* <p className="text-lg font-bold">Tata 1mg Labs (Tata 1mg Technologies Private Limited )</p> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6" action="">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Name</span>
                  </label>
                  <input type="text" placeholder="Name" className="input input-bordered w-full max-w-md" {...register("name", { required: true })} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Mobile*</span>
                  </label>
                  <input type="text" placeholder="Mobile Number" className="input input-bordered w-full max-w-md" {...register("mobile", { required: true })} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Age*</span>
                  </label>
                  <input type="number" placeholder="Age" className="input input-bordered w-full max-w-md" {...register("age", { required: true })} />
                </div>

                <div className="flex  w-full gap-3 max-w-md">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-base font-semibold text-my-primary">Date</span>
                    </label>
                    <DatePicker
                      selected={selectesDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd-MM-yyyy"
                      minDate={new Date()}
                      placeholderText="dd-MM-yyyy"
                      className="w-full max-w-md  input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-base font-semibold text-my-primary">Time</span>
                    </label>

                    <DatePicker
                      className="w-full max-w-md  input input-bordered"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      minTime={setHours(setMinutes(new Date(), 0), 17)}
                      maxTime={setHours(setMinutes(new Date(), 30), 20)}
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                    
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Lab Name</span>
                  </label>
                  <select className="select select-ghost w-full max-w-md border input input-bordered ">
                    <option disabled selected>
                      Pick the Your Comfortable
                    </option>
                    <option>Popular Diagnostic Centre Ltd</option>
                    <option>Comfort Diagnostic Centre Pvt</option>
                    <option>Padma Diagnostic Center</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Mobile*</span>
                  </label>
                  <input type="text" placeholder="Mobile Number" className="input input-bordered w-full max-w-md" />
                </div>
              </div>
              <div className="form-control mt-6">
                <h2 className="text-2xl font-bold">Additional information</h2>
                <p className="text-gray-5 mt-2 font-semibold">notes (optional)</p>
                <textarea placeholder="Spacial note" className="textarea textarea-bordered textarea-lg w-full max-w-md" />
              </div>
            </form>
          </div>
          {/* payment  */}
          <LabOrder />
        </div>
      </div>
    </div>
  );
};

export default LabPayment;
