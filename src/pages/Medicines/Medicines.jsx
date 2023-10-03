/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDown } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import { LiaAngleRightSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { addImageToDBApi } from "../../Features/Images/addImageToDB";
import { fetchMedicines } from "../../Features/Medicines/AllMedicines/allMedicines";
import { addNotificationApi } from "../../Features/Notifications/addNotification";
import { uploadImageApi } from "../../Features/UploadImage/uploadImage";
import mediSideBanner from "../../assets/Medicine/medi-banner.jpg";
import Loader from "../../components/Loader";
import { AuthContext } from "../../contexts/AuthProvider";
import MediCard from "../Shared/Card/MediCard";
import NewsLetter from "../Shared/medicine/NewsLetter";
import TopRatedMedicine from "../Shared/medicine/TopRatedMedicine";
import WorkInfo from "../Shared/medicine/WorkInfo";
import MediRequest from "./MediRequest";
import MedicineSwiper from "./MedicineSwiper";
import NoMedicineText from "./NoMedicineText";
import PrescriptionBtn from "./PrescriptionBtn";

// const orderDate = moment().format("Do MMM YY");
const dateAndTime = moment().format("Do MMM YY, h:mm a");

const Medicines = () => {
  const { user } = useContext(AuthContext);
  const [medicines, setMedicines] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(null);
  const [params] = useSearchParams();
  const category = params.get("category");
  const { allData, isloading } = useSelector((state) => state?.allMedicines);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      axios.get(`http://localhost:5000/medicinesc?category=${category}`).then((res) => setMedicines(res.data));
    } else {
      setMedicines(allData);
    }
  }, [allData, category]);

  useEffect(() => {
    axios.get("/districts.json").then((res) => setDistricts(res.data?.districts));
  }, []);

  const handelSort = (sort) => {
    dispatch(fetchMedicines({ sort }));
  };

  const medicineParPage = 20;
  const startIndex = currentPage * medicineParPage;
  const endIndex = startIndex + medicineParPage;
  const PaginationMedicines = medicines.slice(startIndex, endIndex);
  const pageCount = Math.ceil(medicines.length / medicineParPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  const handelCategoryFilter = (fCategory) => {
    const filterData = allData.filter((item) => item?.category?.value === fCategory);
    setCurrentPage(0);
    setMedicines(filterData);
    setIsOpen(fCategory);
    console.log(currentPage);
  };

  const [showFilter, setShowFilter] = useState("-ml-96");
  const filterItems = (
    <div>
      <div className="rounded border border-gray-3 bg-white">
        <h3 className="text-title-color text-lg lg:text-xl font-medium lg:font-extrabold pl-3 py-3 font-nunito uppercase border-l-4 border-my-primary">Medicine Categories</h3>
        <div className="px-6 text-sm border-t border-gray-3 divide-y divide-gray-3 text-gray-7 font-medium lg:text-base">
          <button type="button" onClick={() => dispatch(fetchMedicines())} className="flex items-center">
            <Link onClick={() => setIsOpen("allMedicine")} to="/medicines" className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "allMedicine" ? "text-my-accent underline" : ""}`}>
              <LiaAngleRightSolid /> All Medicines
            </Link>
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Pain-Relief")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Pain-Relief" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Pain Relief
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Digestive-Health")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Digestive-Health" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Digestive Health
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Cough-Cold")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Cough-Cold" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Cough & Cold
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Diabetes-Care")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Diabetes-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Diabetes Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Heart-Health")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Heart-Health" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Heart Health
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Laundry-Household")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Laundry-Household" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Laundry Household
          </button>
          <button type="button" onClick={() => handelCategoryFilter("Skin-Care")} className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Skin-Care" ? "text-my-accent underline" : ""}`}>
            <LiaAngleRightSolid /> Skin Care
          </button>
          <button type="button" onClick={() => handelCategoryFilter("Eye-Care")} className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Eye-Care" ? "text-my-accent underline" : ""}`}>
            <LiaAngleRightSolid /> Eye Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Women-Care")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Women-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Women Care
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Mens-Products")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Mens-Products" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Men's Products
          </button>
          <button type="button" onClick={() => handelCategoryFilter("Vitamins")} className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Vitamins" ? "text-my-accent underline" : ""}`}>
            <LiaAngleRightSolid /> Vitamins
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Devices-Equipment")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Devices-Equipment" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Devices & Equipment
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Bone-Health-care")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Bone-Health-care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Bone Health care
          </button>
          <button type="button" onClick={() => handelCategoryFilter("Weight")} className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Weight" ? "text-my-accent underline" : ""}`}>
            <LiaAngleRightSolid /> Weight
          </button>
          <button
            type="button"
            onClick={() => handelCategoryFilter("Dental-Care")}
            className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Dental-Care" ? "text-my-accent underline" : ""}`}
          >
            <LiaAngleRightSolid /> Dental Care
          </button>
          <button type="button" onClick={() => handelCategoryFilter("Baby-Care")} className={`inline-flex items-center gap-1 w-full py-2 lg:py-3 hover:text-my-accent hover:cursor-pointer ${isOpen === "Baby-Care" ? "text-my-accent underline" : ""}`}>
            <LiaAngleRightSolid /> Baby Care
          </button>
        </div>
      </div>
    </div>
  );

  // handle prescription
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);

    dispatch(uploadImageApi(formData)).then((res) => {
      const prescriptionImg = res.payload.data?.display_url;

      const imageData = {
        prescription: prescriptionImg,
        email: user.email,
        patientName: data.name,
        date: dateAndTime,
        status: "pending",
      };

      dispatch(addImageToDBApi({ imageData, collectionName: "prescription" })).then((res2) => {
        if (res2.payload.insertedId) {
          const notificationData = {
            name: "New prescription uploaded",
            senderEmail: user?.email,
            date: dateAndTime,
            // time: dateAndTime,
            photoURL: prescriptionImg,
            url: "dashboard/prescriptions",
            deliveryTime: `${user?.email}`,
            receiver: "admin",
          };

          dispatch(addNotificationApi(notificationData)).then((res3) => {
            if (res3.payload.insertedId) {
              Swal.fire("Prescription uploaded!", "As early as possible, we will add the medicines to your cart and send you an email.", "success");
              setLoading(false);
              window.my_modal_PrescriptionUpload.close();
              reset();
            }
          });
        }
      });
    });
  };

  // handle new medicine request
  const onSubmitMediReq = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const req_medi_name = form.req_medi_name.value;
    const req_medi_quantity = form.req_medi_quantity.value;
    const district = form.district.value;
    const need_days = form.need_days.value;
    const user_comment = form.user_comment.value;
    const userData = { name, user_email: user?.email, number, req_medi_name, req_medi_quantity, district, need_days, user_comment, req_date: dateAndTime, status: "requesting" };
    axios
      .post("http://localhost:5000/requestNewMedicine", userData)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire("Medicine Request Sent!", "Stay tuned for a notification and send email when it's available on our website.", "success");
          setLoading(false);
          form.reset();
          document.getElementById("my_modal_mediRequest").close();
        }
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Medicine Add Failed",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <section className="bg-lite">
      <div className="bg-my-primary py-3 lg:py-6 flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-10">
        <MediRequest />
        <PrescriptionBtn />
      </div>
      <div className="container mx-auto relative">
        <div className=" flex items-center mx-auto py-5 px-4 md:py-8 lg:pt-10 lg:px-10">
          <button onClick={() => setShowFilter("")} className="lg:hidden" type="button">
            <BsFilterLeft className="text-lg font-bold text-my-primary mr-2" />
          </button>

          <div className="flex items-center justify-between w-full">
            <p className="inline-flex items-center gap-1 font-medium md:font-semibold tracking-wider text-black-2 lg:text-lg">
              <Link to="/" className="hover:text-my-accent cursor-pointer transition-colors">
                Home
              </Link>
              <HiOutlineChevronRight />
              <span>Medicines</span>
            </p>

            <div className="flex items-center gap-3">
              <div className="filter-medicine">
                <Menu
                  menuButton={
                    <MenuButton className="flex items-center gap-2 font-semibold p-2 rounded-md  ease-in text-sm duration-150">
                      Filter Medicines <AiOutlineDown />
                    </MenuButton>
                  }
                  transition
                >
                  <MenuItem onClick={() => handelSort("phtl")} className="font-medium text-gray-5">
                    Price low to high
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("plth")} className="font-medium text-gray-5">
                    Price High to low
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("byRating")} className="font-medium text-gray-5">
                    Height selling
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("fNew")} className="font-medium text-gray-5">
                    New Product
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("fOld")} className="font-medium text-gray-5">
                    Old product
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-64 rounded-md lg:hidden absolute top-0 z-30 h-screen ${showFilter} transition-all duration-500`}>
          <div className="flex justify-between items-center">
            <button onClick={() => setShowFilter("-ml-96")} className="lg:hidden" type="button">
              <RxCross1 className="text-lg font-bold text-my-primary mr-2 btn btn-circle btn-sm p-1" />
            </button>
          </div>
          {filterItems}
        </div>

        <div className="mx-auto px-4 lg:px-10 pb-10 lg:grid grid-cols-[1fr_4fr] gap-6">
          <div>
            <div className="w-72 h-fit rounded-md hidden lg:block">{filterItems}</div>
            <div className="hidden lg:block w-72">
              <div className="my-8">
                <MedicineSwiper />
              </div>
              <TopRatedMedicine />
            </div>
          </div>
          {isloading && <Loader spinner />}

          <div>
            <div>
              {" "}
              {PaginationMedicines?.length === 0 ? (
                <NoMedicineText />
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                  {PaginationMedicines?.map((medicine) => (
                    <MediCard key={medicine._id} medicine={medicine} />
                  ))}
                </div>
              )}
              {/* {(PaginationMedicines?.length <= 0 || !isloading) && <NoMedicineText />} */}
            </div>
            <div className="mt-10">
              <ReactPaginate
                className="flex text-center items-center justify-center my-auto space-x-3 font-semibold  pb-5 align-middle"
                activeClassName="bg-my-primary text-white rounded-full px-4 py-2"
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <TopRatedMedicine />
        </div>
        <WorkInfo />
      </div>
      <NewsLetter />
      {/* prescription upload modal */}
      <dialog id="my_modal_PrescriptionUpload" className="modal">
        <div className="modal-box w-96">
          <form method="dialog" className="space-y-2">
            <button type="submit" className="btn btn-sm btn-circle btn-ghost bg-red-500 hover:bg-red-400 text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-lg font-bold font-nunito text-center uppercase">Upload Prescription</h4>
            <div>
              <img className="w-60 mx-auto" src="https://i.ibb.co/0hW0C2K/medical-record.png" alt="" />
            </div>
            <input required type="file" className="file-input rounded file-input-bordered file-input-secondary w-full" name="image" id="" {...register("image")} />
            <input placeholder="Enter patient name.." required type="text" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="name" id="" {...register("name")} />
            <button className="submit-btn cursor-pointer w-full rounded- py-2 rounded-md" type="submit">
              {loading ? "Uploading...." : "Upload Prescription"}
            </button>
          </form>
        </div>
      </dialog>

      {/* Medicine Request modal  */}
      <dialog id="my_modal_mediRequest" className="modal">
        <div className="modal-box md:w-1/2">
          <form method="dialog" className="space-y-2">
            <button type="submit" className="btn btn-sm btn-circle btn-ghost bg-red-500 hover:bg-red-400 text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h4 className="text-xl font-bold font-nunito text-center">Request For New Medicine</h4>
          <div>
            <img
              className="w-60 mx-auto my-4"
              src="https://img.freepik.com/free-vector/physical-pain-injury-flat-composition-with-human-characters-suffering-patient-doctor-inside-smartphone-vector-illustration_1284-80339.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais"
              alt=""
            />
          </div>
          <form method="dialog" onSubmit={onSubmitMediReq}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-base font-medium">
                  Your Name<span className="font-bold text-red-500">*</span>
                </label>
                <input placeholder="Enter Your Name.." required type="text" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="name" />
              </div>
              <div>
                <label className="text-base font-medium">
                  Your Phone No.<span className="font-bold text-red-500">*</span>
                </label>
                <input placeholder="012.." required type="number" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="number" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 my-4">
              <div>
                <label className="text-base font-medium">
                  Request Medicine Name <span className="font-bold text-red-500">*</span>
                </label>
                <input placeholder="Enter Your Request Medicine Name.." required type="text" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="req_medi_name" />
              </div>
              <div>
                <label className="text-base font-medium">
                  Request Quantity <span className="font-bold text-red-500">*</span>
                </label>
                <input placeholder="Request Medicine Quantity" required type="number" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="req_medi_quantity" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 my-4">
              <div>
                <label className="text-base font-medium">
                  Your District <span className="font-bold text-red-500">*</span>
                </label>
                <select required name="district" id="" className="rounded border outline-my-accent outline-1 p-2 border-my-accent w-full">
                  <option defaultValue>Select Your District</option>
                  {districts?.map((district) => (
                    <option key={district?.id} value={district?.name}>
                      {district?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-base font-medium">
                  Need Day<span className="font-bold text-red-500">*</span>
                </label>
                <input placeholder="2 days" min={2} required type="number" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="need_days" />
              </div>
            </div>
            <div className="my-4">
              <label className="text-base font-medium">
                Description <span className=" text-sm">(Optional)</span>
              </label>
              <textarea maxLength={100} placeholder="Description (optional)" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full mt-4" name="user_comment" rows="3" cols="50" />
            </div>
            <button className="submit-btn cursor-pointer w-full rounded- py-2 rounded-md" type="submit">
              {loading ? "Requesting...." : "Request"}
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </section>
  );
};

export default Medicines;
