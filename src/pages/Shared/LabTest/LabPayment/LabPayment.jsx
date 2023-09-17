import { setHours, setMinutes } from "date-fns";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { labSSLPaymentApi } from "../../../../Features/PaymentGetway/labPayment";
import { AuthContext } from "../../../../contexts/AuthProvider";
import useLabCart from "../../../../hooks/useLabCart";
import LabBanner from "../LabBanner/LabBanner";
import LabOrder from "../LabOrder/LabOrder";

const districts = [
  { value: "Badda", label: "Badda" },
  { value: "Demra", label: "Demra" },
  { value: "Dhanmondi", label: "Dhanmondi" },
  { value: "Gulshan", label: "Gulshan" },
  { value: "Mirpur", label: "Mirpur" },
  { value: "Savar", label: "Savar" },
  { value: "Uttara", label: "Uttara" },
  { value: "Mohammadpur", label: "Mohammadpur" },
  { value: "shyamoli", label: "shyamoli" },
  { value: "kallyanpur", label: "kallyanpur" },
];

const LabPayment = () => {
  const [labCart] = useLabCart();
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  // console.log(labCart);
  // const [selectDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  // let today = new Date();
  // let hours = `${today.getHours()}`;
  // let min = `${today.getMinutes()}`;

  // const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), min), hours));
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 9));
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    data.dateTime = e.target.dateTime.value;
    data.area = selectedOption.value;
    data.email = user.email;
    // console.log(data);
    dispatch(labSSLPaymentApi({ personalInfo: data, cart: labCart }));
  };

  return (
    <div>
      <LabBanner />
      <div className="my-container">
        <div className="bg-lite p-4 md:p-14 rounded-lg flex flex-col-reverse  md:flex-row-reverse  justify-between gap-8">
          <div className=" md:w-1/2">
            {/* <div className="space-y-4">
              <p className="font-semibold">PATHOLOGY TESTS (1)</p>
              <p className="text-lg font-bold">Tata 1mg Labs (Tata 1mg Technologies Private Limited )</p>
            </div> */}
            <form onSubmit={handleSubmit(onSubmit)} className="" action="">
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

                <div className="  w-full  max-w-md">
                  {/* <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-base font-semibold text-my-primary">Date*</span>
                    </label>
                    <DatePicker
                      {...register("date")}
                      required
                      selected={selectDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd-MM-yyyy"
                      minDate={new Date()}
                      placeholderText="dd-MM-yyyy"
                      className="w-full max-w-md  input input-bordered"
                    />
                  </div> */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-base font-semibold text-my-primary">Time*</span>
                    </label>
                    <DatePicker
                      {...register("dateTime")}
                      required
                      className="w-full max-w-md  input input-bordered"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      filterTime={filterPassedTime}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      includeTimes={[
                        setHours(setMinutes(new Date(), 0), 9),
                        setHours(setMinutes(new Date(), 30), 9),
                        setHours(setMinutes(new Date(), 0), 10),
                        setHours(setMinutes(new Date(), 30), 10),
                        setHours(setMinutes(new Date(), 0), 11),
                        setHours(setMinutes(new Date(), 30), 11),
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 30), 12),
                        setHours(setMinutes(new Date(), 0), 13),
                        setHours(setMinutes(new Date(), 30), 13),
                        setHours(setMinutes(new Date(), 0), 14),
                        setHours(setMinutes(new Date(), 30), 14),
                        setHours(setMinutes(new Date(), 0), 15),
                        setHours(setMinutes(new Date(), 30), 15),
                        setHours(setMinutes(new Date(), 0), 16),
                        setHours(setMinutes(new Date(), 30), 16),
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 30), 17),
                        setHours(setMinutes(new Date(), 0), 18),
                        setHours(setMinutes(new Date(), 30), 18),
                        setHours(setMinutes(new Date(), 0), 19),
                        setHours(setMinutes(new Date(), 30), 19),
                        setHours(setMinutes(new Date(), 0), 20),
                      ]}
                    />

                    {/* <DatePicker
                      {...register("time")}
                      required
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      filterTime={filterPassedTime}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      placeholderText="Select Time"
                      className="w-full max-w-md  input input-bordered"
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      // dateFormat="h:mm aa,dd-MM-yyyy"
                      includeTimes={[
                        setHours(setMinutes(new Date(), 0), 9),
                        setHours(setMinutes(new Date(), 30), 9),
                        setHours(setMinutes(new Date(), 0), 10),
                        setHours(setMinutes(new Date(), 30), 10),
                        setHours(setMinutes(new Date(), 0), 11),
                        setHours(setMinutes(new Date(), 30), 11),
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 30), 12),
                        setHours(setMinutes(new Date(), 0), 13),
                        setHours(setMinutes(new Date(), 0), 16),
                        setHours(setMinutes(new Date(), 30), 16),
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 30), 17),
                        setHours(setMinutes(new Date(), 0), 18),
                        setHours(setMinutes(new Date(), 30), 18),
                        setHours(setMinutes(new Date(), 0), 19),
                        setHours(setMinutes(new Date(), 30), 19),
                        setHours(setMinutes(new Date(), 0), 20),
                      ]}
                    /> */}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Area*</span>
                  </label>

                  <Select
                    name="area"
                    className=" w-full max-w-md   input-bordered "
                    isClearable
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={districts}
                    placeholder="Select your Area"
                    noOptionsMessage={() => "No district found"}
                  />

                  {/* <select className="select select-ghost w-full max-w-md border input input-bordered ">
                    <option disabled selected>
                      Pick the Your Comfortable
                    </option>
                    <option>Popular Diagnostic Centre Ltd</option>
                    <option>Comfort Diagnostic Centre Pvt</option>
                    <option>Padma Diagnostic Center</option>
                  </select> */}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text md:text-base font-semibold text-my-primary">Street / Nearby / Building:*</span>
                </label>
                <input type="text" placeholder="Nearby / Building etc" className="input input-bordered w-full max-w-md" {...register("address", { required: true })} />
              </div>
              <div className="form-control mt-6">
                <h2 className="text-2xl font-bold">Additional information</h2>
                <p className="text-gray-5 mt-2 font-semibold">notes (optional)</p>
                <textarea placeholder="Spacial note" className="textarea textarea-bordered textarea-lg w-full max-w-md" {...register("note")} />
              </div>

              <button type="submit" className="my-btn w-full max-w-md mt-8">
                Payment
              </button>
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
