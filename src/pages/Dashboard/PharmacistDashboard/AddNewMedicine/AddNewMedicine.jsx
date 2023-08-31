/* eslint-disable no-unused-vars */
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const categories = [
  { value: "Pain-Relief", label: "Pain Relief" },
  { value: "Digestive-Health", label: "Digestive Health" },
  { value: "Cough&Cold", label: "Cough & Cold" },
  { value: "Diabetes-Care", label: "Diabetes Care" },
  { value: "Heart-Health", label: "Heart Health" },
  { value: "Laundry&Household", label: "Laundry & Household" },
  { value: "Skin-Care", label: "Skin Care" },
  { value: "Eye-Care", label: "Eye Care" },
  { value: "Women-Care", label: "Women Care" },
  { value: "Mens-Products", label: "Men's Products" },
  { value: "Vitamins", label: "Vitamins" },
  { value: "Devices-Equipment", label: "Devices & Equipment" },
  { value: "Bone-Health-care", label: "Bone Health care" },
  { value: "Weight", label: "Weight" },
  { value: "Dental-Care", label: "Dental Care" },
  { value: "Baby-Care", label: "Baby Care" },
  { value: "Fever", label: "Fever (Otc Medicine)" },
  { value: "Headache", label: "Headache (Otc Medicine)" },
  { value: "Diarrhea", label: "Diarrhea (Otc Medicine)" },
  { value: "Eczema", label: "Eczema (Otc Medicine)" },
  { value: "Pregnancy", label: "Pregnancy (Otc Medicine)" },
  { value: "Cough&Flu", label: "Cough&Flu (Otc Medicine)" },
  { value: "Nasal", label: "Nasal (Otc Medicine)" },
  { value: "Vitamins", label: "Vitamins (Otc Medicine)" },
  { value: "Sexual-Med", label: "Sexual Med (Otc Medicine)" },
  { value: "Gastric", label: "Gastric (Otc Medicine)" },
  { value: "Sleeplessness", label: "Sleeplessness (Otc Medicine)" },
  { value: "Constipation", label: "Constipation (Otc Medicine)" },
];

const tags = [
  { value: "Healthy", label: "Healthy" },
  { value: "Covid", label: "Covid" },
  { value: "Personal", label: "Personal" },
  { value: "Baby", label: "Baby" },
  { value: "Fever", label: "Fever" },
];

const AddNewMedicine = () => {
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
  const { user } = useAuth();
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const date = moment().format("L");
    data.price = parseFloat(data.price, 10);
    data.discount = parseInt(data.discount, 10);
    data.available_quantity = parseInt(data.available_quantity, 10);
    const allData = { ...data, feature_with_details: content, sellQuantity: 0, allRatings: [], rating: 0, status: "pending", date };
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingURL, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgResponse => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          axios.post("http://localhost:5000/medicines", { ...allData, image: imgURL }).then(res => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Medicine Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            }
          }).catch((err) => {
            if (err) {
              Swal.fire({
                icon: "error",
                title: "Medicine Add Failed",
                text: "Something went wrong!",
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="admission-form doctor-form">
        <h3 className="text-center text-xl lg:text-3xl font-medium lg:font-semibold my-5 text-title-color tracking-wide">Add New Medicine</h3>
        <div className="divider" />
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Pharmacist Name</span>
            <input
              readOnly
              defaultValue={user?.displayName}
              type="text"
              {...register("pharmacist_name")}
            />
          </div>
          <div>
            <span>Pharmacist Email</span>
            <input
              readOnly
              defaultValue={user?.email}
              type="email"
              {...register("pharmacist_email")}
            />
          </div>
        </div>
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Medicine Name</span>
            <input required placeholder="Enter medicine name" type="text" {...register("medicine_name")} />
          </div>
          <div>
            <span>Medicine Image</span>
            <input type="file" required {...register("image")} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div>
            <span>Medicine Category</span>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  isClearable
                  required
                  {...field}
                  options={categories}
                  placeholder="Select category"
                  noOptionsMessage={() => "No category found"}
                />
              )}
            />
          </div>
          <div>
            <span>Tags <small>(choose multiple tags)</small></span>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  required
                  {...field}
                  options={tags}
                  isMulti
                  placeholder="Select tags"
                />
              )}
            />
          </div>
        </div>
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Enter price</span>
            <input
              required
              min={1}
              placeholder="Enter price"
              type="number"
              {...register("price")}
            />
          </div>
          <div>
            <span>Available Quantity</span>
            <input
              min={1}
              placeholder="Enter available quantity"
              type="number"
              {...register("available_quantity")}
            />
          </div>
        </div>
        <div className="two-input-field lg:flex gap-5">
          <div>
            <span>Enter Discount</span>
            <input
              min={0}
              placeholder="Enter discount"
              type="number"
              {...register("discount")}
            />
          </div>
          <div>
            <span>Sku No.</span>
            <input
              required
              placeholder="Enter sku"
              type="number"
              {...register("sku")}
            />
          </div>
        </div>
        <div className="mb-5">
          <span>Medicine Description</span>
          <textarea required {...register("medicine_description", { required: true })} className="textarea textarea-bordered h-28 w-full resize-none" placeholder="Medicine description" />
        </div>
        <div>
          <h4>Medicine Features & Details <small>(you can add multiple features)</small></h4>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={newContent => setContent(newContent)}
          />
        </div>
        <div className="pt-5 lg:pt-10">
          <input className="submit-btn" type="submit" value="Add Medicine" />
        </div>
      </form>
    </div>
  );
};

export default AddNewMedicine;
