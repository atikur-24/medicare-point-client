// import { AiFillThunderbolt } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

const LabSearch = () => {
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
    <div className="flex flex-col md:items-center justify-between md:flex-row gap-4 md:gap-10 ">
      <form className="flex items-center  md:w-[40%]">
        <input className="w-full  border h-16   rounded-l-lg   px-6 focus:input-bordered input-accent" type="text" placeholder="Search Test and Packages" />
        <button type="button" className=" bg-my-primary h-16 rounded-r-lg flex items-center justify-center px-4  ">
          <FiSearch className="text-3xl text-white" />
        </button>
      </form>

      <div className="flex items-center gap-4 ">
        <div>
          <HiLocationMarker className="w-10 h-10 text-my-primary" />
        </div>
        <div className="space-y-2">
          {/* <h2 className="font-nunito font-bold">Collect sample from</h2> */}
          <select id="division" defaultValue="Collect sample from" className="select w-full max-w-md ">
            <option disabled selected>
              Collect sample from
            </option>
            {districts.map((division, index) => (
              <option key={index} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <div className="md:w-[40%] hidden">
        <div className="  gap-6 md:gap-0 border border-gray-3 flex md:items-center md:justify-between px-4 rounded-lg py-2 bg-white flex-col md:flex-row ">
          <p className="inline-flex  items-center gap-4 font-medium  md:text-lg">
            <AiFillThunderbolt className="w-6 h-6 text-[#f59e0b]" />
            Upto 30% Of
          </p>
          <button type="button" className="btn my-btn ">
            Book Test From Prescription
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default LabSearch;
