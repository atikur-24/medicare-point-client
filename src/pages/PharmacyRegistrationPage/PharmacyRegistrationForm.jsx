/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { applicationForPharmacist } from "../../hooks/userApi";

const PharmacyRegistrationForm = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.pharmacistImage = user?.photoURL;
    data.email = user?.email;
    data.applicationType = "pending";
    applicationForPharmacist(data);
    reset();
  };

  const divisions = ["Dhaka", "Chattogram", "Barishal", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"];
  const districts = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Sylhet",
    "Jessore",
    "Dinajpur",
    "Gopalganj",
    "Gazipur",
    "Mymensingh",
    "Comilla",
    "Barisal",
    "Narayanganj",
    "Faridpur",
    "Bogra",
    "Pabna",
    "Rangamati",
    "Kushtia",
    "Rangpur",
    "Manikganj",
    "Noakhali",
    "Khulna",
    "Tangail",
    "Panchagarh",
    "Bhola",
    "Bandarban",
    "Chandpur",
    "Habiganj",
    "Lakshmipur",
    "Barguna",
    "Jhalokati",
    "Pirojpur",
    "Patuakhali",
    "Jhenaidah",
    "Narail",
    "Magura",
    "Lalmonirhat ",
    "Kurigram",
    "Nilphamari",
    "Gaibandha",
    "Thakurgaon",
    "Satkhira",
    "Bagerhat",
    "Chuadanga",
    "Meherpur",
    "Sirajganj",
    "Joypurhat",
    "Natore",
    "Naogaon",
    "Nawabganj",
    "Khagrachhari",
    "Feni",
    "Brahmanbaria",
    "Sunamganj",
    "Cox's Bazar",
    "Moulvibazar",
    "Shariatpur",
    "Madaripur",
    "Rajbari",
    "Kishoreganj",
    "Jamalpur",
    "Sherpur",
    "Netrakona",
    "Munshiganj",
    "Narsingdi",
  ];

  return (
    <div className="mx-auto p-16 rounded-lg border-[1px] border-gray-3 bg-white ">
      <h2 className="text-2xl font-semibold mb-4">Pharmacy Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="mb-4">
            <label htmlFor="pharmacyName" className="block font-medium cursor-pointer ">
              Pharmacy name:
            </label>
            <input
              id="pharmacyName"
              placeholder="Pharmacy Name"
              {...register("pharmacyName", { required: true })}
              type="text"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.pharmacyName && <small>please Write pharmacy Name </small>}
          </div>
          <div className="mb-4">
            <label htmlFor="pharmacyEmail" className="block font-medium cursor-pointer">
              Pharmacy email address:
            </label>
            <input
              id="pharmacyEmail"
              placeholder="Pharmacy Email"
              {...register("pharmacyEmailAddress", { required: true })}
              type="email"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.pharmacyEmailAddress && <small>please Write pharmacy Official Email </small>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="mb-4">
            <label htmlFor="pharmacyPhoneNumber" className="block font-medium cursor-pointer">
              Pharmacy phone number:
            </label>
            <input
              id="pharmacyPhoneNumber"
              placeholder="Pharmacy Phone Number"
              {...register("pharmacyPhoneNumber", { required: true })}
              type="number"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.pharmacyPhoneNumber && <small>please Write pharmacy Official Email </small>}
          </div>

          <div>
            <label htmlFor="division" className="block font-medium cursor-pointer">
              Select your Division
            </label>
            <select
              id="division"
              {...register("division", { required: true })}
              defaultValue="Select devision"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            >
              <option value="">Select Your Division Name</option>
              {divisions.map((division, index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </select>
            {errors.division && <small>please select your division</small>}
          </div>
        </div>
        <div className=" grid  grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <label htmlFor="district" className="block font-medium cursor-pointer">
              Select your District
            </label>
            <select
              id="district"
              {...register("district", { required: true })}
              defaultValue="Select district"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            >
              <option value="">Select Your District Name</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && <small>please select your district </small>}
          </div>
          <div className="mb-4">
            <label htmlFor="fullAddress" className="block font-medium cursor-pointer">
              Add Full Address fo pharmacy:
            </label>
            <input
              id="fullAddress"
              placeholder="Provide pharmacy's full address"
              {...register("pharmacyFullAddress", { required: true })}
              type="address"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.pharmacyFullAddress && <small>please Write Properly your pharmacy's full address </small>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="mb-4">
            <label htmlFor="pharmacistName" className="block font-medium cursor-pointer">
              Pharmacist name:
            </label>
            <input
              id="pharmacistName"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Pharmacy Name"
              {...register("pharmacistName", { required: true })}
              type="text"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.pharmacistName && <small>please Write pharmacist Name </small>}
          </div>

          <div className="mb-4">
            <label htmlFor="medicinesSold" className="block font-medium cursor-pointer">
              Types of medicines sold:
            </label>
            <input
              id="medicinesSold"
              placeholder="Types of medicines sold"
              {...register("medicinesSold", { required: true })}
              type="text"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.medicinesSold && <small>please Write Types of medicines sold </small>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 ">
          <div className="mb-4">
            <label htmlFor="pharmacyRegisNumber" className="block font-medium cursor-pointer">
              Pharmacy registration number:
            </label>
            <input
              id="pharmacyRegisNumber"
              placeholder="0R3XXXXXXXXXXXXXXXXXXXXX"
              {...register("pharmacyRegisNumber", { required: true })}
              type="text"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.pharmacyRegisNumber && <small>please Write Pharmacy registration number</small>}
          </div>
          <div className="mb-4">
            <label htmlFor="pharmacistLicense" className="block font-medium cursor-pointer">
              Pharmacist license number:
            </label>
            <input
              id="pharmacistLicense"
              placeholder="0L5XXXXXXXXXXXXXXXXXXXXX"
              {...register("pharmacistLicense", { required: true })}
              type="text"
              className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
            />
            {errors.pharmacistLicense && <small>please Write Pharmacist license number </small>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="mb-4">
            <label htmlFor="scope" className="block font-medium cursor-pointer">
              Scope of practice:
            </label>
            <textarea id="scope" {...register("scopeOfPractice", { required: true })} className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2" />
            {errors.scopeOfPractice && <small>please Write Scope of practice </small>}
          </div>
          <div className="mb-4">
            <label htmlFor="shopingInfo" className="block font-medium cursor-pointer">
              Shipping information:
            </label>
            <textarea id="shopingInfo" {...register("shippingInformation", { required: true })} className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2" />
            {errors.shippingInformation && <small>please Write Shipping information </small>}
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" className="my-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PharmacyRegistrationForm;
