/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-wrap-multilines */
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDown } from "react-icons/ai";
import { BiSolidCameraPlus } from "react-icons/bi";
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
import { uploadImageApi } from "../../Features/UploadImage/uploadImage";
import Loader from "../../components/Loader";
import { AuthContext } from "../../contexts/AuthProvider";
import MediCard from "../Shared/Card/MediCard";
import TopRatedMedicine from "../Shared/medicine/TopRatedMedicine";
import MediContact from "./MediContact";
import MediRequest from "./MediRequest";

const Medicines = () => {
  const { user } = useContext(AuthContext);
  const [medicines, setMedicines] = useState([]);
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

  const handelSort = (sort) => {
    dispatch(fetchMedicines({ sort }));
  };

  const handelCategoryFilter = (fCategory) => {
    const filterData = allData.filter((item) => item?.category?.value === fCategory);
    setMedicines(filterData);
    setIsOpen(fCategory);
  };

  const medicineParPage = 16;
  const startIndex = currentPage * medicineParPage;
  const endIndex = startIndex + medicineParPage;
  const PaginationMedicines = medicines.slice(startIndex, endIndex);
  const pageCount = Math.ceil(medicines.length / medicineParPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
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
      };

      dispatch(addImageToDBApi({ imageData, collectionName: "prescription" })).then((res2) => {
        if (res2.payload.insertedId) {
          Swal.fire("Prescription uploaded!", "As early as possible, we will add the medicines to your cart and send you an email.", "success");
          setLoading(false);
          window.my_modal_PrescriptionUpload.close();
          reset();
        }
        // console.log(res2.payload);
      });
    });
  };
  const onSubmitMediReq = (e) => {
    e.preventDefault();
    const form = e.target;
    const req_medi_name = form.req_medi_name.value;
    console.log(req_medi_name);
    form.reset();
  };

  return (
    <section className="bg-lite">
      <MediRequest />
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
              <div className="flex flex-col items-center">
                <BiSolidCameraPlus title="Upload Prescription" onClick={() => window.my_modal_PrescriptionUpload.showModal()} className="text-2xl cursor-pointer" />
              </div>
              <div>
                <Menu
                  menuButton={
                    <MenuButton className="flex items-center gap-2 font-semibold p-2 rounded-md  ease-in duration-150">
                      Filter Medicines <AiOutlineDown />
                    </MenuButton>
                  }
                  transition
                >
                  <MenuItem onClick={() => handelSort("phtl")} className="font-medium text-gray-5">
                    From Low Price
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("plth")} className="font-medium text-gray-5">
                    From Heigh Price
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("byRating")} className="font-medium text-gray-5">
                    From Height selling
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("fNew")} className="font-medium text-gray-5">
                    From New Product
                  </MenuItem>
                  <MenuItem onClick={() => handelSort("fOld")} className="font-medium text-gray-5">
                    From Old product
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
            <div className="hidden lg:block mt-8">
              <TopRatedMedicine />
            </div>
          </div>
          {isloading ? (
            <Loader spinner />
          ) : (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                {PaginationMedicines?.map((medicine) => (
                  <MediCard key={medicine._id} medicine={medicine} />
                ))}
              </div>
            </div>
          )}
        </div>
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
        <div className="lg:hidden">
          <TopRatedMedicine />
        </div>
        <MediContact />
      </div>
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
          <h4 className="text-xl font-bold font-nunito text-center">Request Medicine</h4>
          <div>
            <img
              className="w-60 mx-auto my-4"
              src="https://img.freepik.com/free-vector/physical-pain-injury-flat-composition-with-human-characters-suffering-patient-doctor-inside-smartphone-vector-illustration_1284-80339.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais"
              alt=""
            />
          </div>
          <form onSubmit={onSubmitMediReq}>
            <input placeholder="Enter Your Request Medicine Name.." required type="text" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="req_medi_name" id="" />
            <textarea placeholder="Description (optional)" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full mt-4" id="w3review" name="w3review" rows="4" cols="50" />
            <button className="submit-btn cursor-pointer w-full rounded- py-2 rounded-md" type="submit">
              {loading ? "Uploading...." : "Request"}
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
