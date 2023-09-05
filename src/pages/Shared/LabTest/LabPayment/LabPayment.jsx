import { setHours, setMinutes } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Select from "react-select";
import LabBanner from "../LabBanner/LabBanner";
import LabOrder from "../LabOrder/LabOrder";

const districts = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Jessore", label: "Jessore" },
  { value: "Dinajpur", label: "Dinajpur" },
  { value: "Gopalganj", label: "Gopalganj" },
  { value: "Gazipur", label: "Gazipur" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Comilla", label: "Comilla" },
  { value: "Barisal", label: "Barisal" },
  { value: "Narayanganj", label: "Narayanganj" },
  { value: "Faridpur", label: "Faridpur" },
  { value: "Bogra", label: "Bogra" },
  { value: "Pabna", label: "Pabna" },
  { value: "Rangamati", label: "Rangamati" },
  { value: "Kushtia", label: "Kushtia" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Manikganj", label: "Manikganj" },
  { value: "Noakhali", label: "Noakhali" },
  { value: "Khulna", label: "Khulna" },
  { value: "Tangail", label: "Tangail" },
  { value: "Panchagarh", label: "Panchagarh" },
  { value: "Bhola", label: "Bhola" },
  { value: "Bandarban", label: "Bandarban" },
  { value: "Chandpur", label: "Chandpur" },
  { value: "Habiganj", label: "Habiganj" },
  { value: "Lakshmipur", label: "Lakshmipur" },
  { value: "Barguna", label: "Barguna" },
  { value: "Jhalokati", label: "Jhalokati" },
  { value: "Pirojpur", label: "Pirojpur" },
  { value: "Patuakhali", label: "Patuakhali" },
  { value: "Jhenaidah", label: "Jhenaidah" },
  { value: "Narail", label: "Narail" },
  { value: "Magura", label: "Magura" },
  { value: "Lalmonirhat ", label: "Lalmonirhat" },
  { value: "Kurigram", label: "Kurigram" },
  { value: "Nilphamari", label: "Nilphamari" },
  { value: "Gaibandha", label: "Gaibandha" },
  { value: "Thakurgaon", label: "Thakurgaon" },
  { value: "Satkhira", label: "Satkhira" },
  { value: "Bagerhat", label: "Bagerhat" },
  { value: "Chuadanga", label: "Chuadanga" },
  { value: "Meherpur", label: "Meherpur" },
  { value: "Sirajganj", label: "Sirajganj" },
  { value: "Joypurhat", label: "Joypurhat" },
  { value: "Natore", label: "Natore " },
  { value: "Naogaon", label: "Naogaon" },
  { value: "Nawabganj", label: "Nawabganj" },
  { value: "Khagrachhari", label: "Khagrachhari" },
  { value: "Feni", label: "Feni" },
  { value: "Brahmanbaria", label: "Brahmanbaria" },
  { value: "Sunamganj", label: "Sunamganj" },
  { value: "Moulvibazar", label: "Moulvibazar" },
  { value: "Shariatpur", label: "Shariatpur" },
  { value: "Madaripur", label: "Madaripur" },
  { value: "Rajbari", label: "Rajbari" },
  { value: "Kishoreganj", label: "Kishoreganj" },
  { value: "Jamalpur", label: "Jamalpur" },
  { value: "Sherpur", label: "Sherpur" },
  { value: "Netrakona", label: "Netrakona" },
  { value: "Munshiganj", label: "Munshiganj" },
  { value: "Narsingdi", label: "Narsingdi" },
];

const LabPayment = () => {
  // const [selectDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  let today = new Date();
  let hours = `${today.getHours()}`;
  let min = `${today.getMinutes()}`;

  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), min), hours));
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
    // data.date = e.target.date.value;
    data.time = e.target.time.value;
    console.log(data);
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

                <div className="flex  w-full gap-3 max-w-md">
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
                      {...register("time")}
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
                <input type="text" placeholder="Area" className="input input-bordered w-full max-w-md" {...register("address", { required: true })} />
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
