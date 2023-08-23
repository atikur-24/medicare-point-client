import { useForm } from "react-hook-form";

const PharmacyRegistrationForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const countries = [
    "Select Country",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    // Add more countries here
  ];
  const cities = {
    "United States": ["New York", "Los Angeles", "Chicago", "Houston"],
    Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Edinburgh"],
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    // Add more cities here
  };

  const onSubmit = (data) => {
    console.log(data);
    // You can add your API call or data processing logic here
  };

  return (
    <div className="mx-auto p-6 rounded-lg border-[1px] border-gray-3 bg-white ">
      <h2 className="text-2xl font-semibold mb-4">Pharmacy Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium ">Pharmacy name:</label>
            <input placeholder="Pharmacy Name" {...register("pharmacyName")} type="text" className="w-full shadow-md focus:input-bordered input-accent border-[1px] rounded-lg border-my-primary p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Pharmacy email address:</label>
            <input
              placeholder="Pharmacy Email"
              {...register("pharmacyEmailAddress")}
              type="email"
              className="w-full shadow-md focus:input-bordered input-accent border-[1px] rounded-lg border-my-primary p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium ">Pharmacy phone number:</label>
            <input
              placeholder="Pharmacy Phone Number"
              {...register("pharmacyName")}
              type="number"
              className="w-full shadow-md focus:input-bordered input-accent border-[1px] rounded-lg border-my-primary p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Pharmacy address:</label>
            <input {...register("pharmacyEmailAddress")} type="text" className="w-full shadow-md focus:input-bordered input-accent border-[1px] rounded-lg border-my-primary p-2" />
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <select {...register("country")} className="w-full shadow-sm rounded p-2">
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <select {...register("city")} className="w-full shadow-sm rounded p-2">
              <option value="">Select City</option>
              {cities[watch("country")]?.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Pharmacy phone number:</label>
            <input {...register("pharmacyPhoneNumber")} type="tel" className="w-full shadow-sm rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Pharmacy website:</label>
            <input {...register("pharmacyWebsite")} type="url" className="w-full shadow-sm rounded p-2" />
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Pharmacist name:</label>
            <input {...register("pharmacistName")} type="text" className="w-full shadow-sm rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Pharmacist license number:</label>
            <input {...register("pharmacistLicenseNumber")} type="text" className="w-full shadow-sm rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Pharmacy registration number:</label>
            <input {...register("pharmacyRegistrationNumber")} type="text" className="w-full shadow-sm rounded p-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Types of medicines sold:</label>
            <input {...register("typesOfMedicinesSold")} type="text" className="w-full shadow-sm rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Payment methods accepted:</label>
            <input {...register("paymentMethodsAccepted")} type="text" className="w-full shadow-sm rounded p-2" />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Contact information for technical support:</label>
            <input {...register("technicalSupportContact")} type="text" className="w-full shadow-sm rounded p-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Scope of practice:</label>
            <textarea {...register("scopeOfPractice")} className="w-full shadow-sm rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Shipping information:</label>
            <textarea {...register("shippingInformation")} className="w-full shadow-sm rounded p-2" />
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
