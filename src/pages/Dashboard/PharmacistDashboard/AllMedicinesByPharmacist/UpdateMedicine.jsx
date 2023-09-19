import axios from "axios";
import JoditEditor from "jodit-react";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const categories = [
  { value: "Pain-Relief", label: "Pain Relief" },
  { value: "Digestive-Health", label: "Digestive Health" },
  { value: "Cough-Cold", label: "Cough & Cold" },
  { value: "Diabetes-Care", label: "Diabetes Care" },
  { value: "Heart-Health", label: "Heart Health" },
  { value: "Laundry-Household", label: "Laundry & Household" },
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
  { value: "Wellness", label: "Wellness" },
  { value: "Covid", label: "Covid" },
  { value: "Personal", label: "Personal" },
  { value: "Baby", label: "Baby" },
  { value: "Fever", label: "Fever" },
  { value: "Skin", label: "Skin" },
];

const UpdateMedicine = () => {
  const existingData = useLoaderData();
  const { feature_with_details, medicine_description, available_quantity, sellQuantity } = existingData || {};
  // console.log(available_quantity, sellQuantity);
  const { user } = useAuth();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [updateQuantity, setUpdateQuantity] = useState(available_quantity - sellQuantity);
  const navigate = useNavigate();

  const handleUpdateQuantity = (e) => {
    setUpdateQuantity(e.target.value);
  };

  const { register, control, handleSubmit, setValue } = useForm();

  // Set default form values with existing data
  useEffect(() => {
    for (const field in existingData) {
      if (existingData) {
        setValue(field, existingData[field]);
      }
    }
    setContent(feature_with_details);
    setDescription(medicine_description);
  }, [existingData, setValue, feature_with_details, medicine_description]);

  const onSubmit = (data) => {
    data.available_quantity = updateQuantity;
    const date = moment().format("L");
    data.price = parseFloat(data.price, 10);
    data.discount = parseInt(data.discount, 10);
    data.available_quantity = parseInt(data.available_quantity, 10);
    if (data.price < data.discount) {
      Swal.fire({
        icon: "error",
        text: "Medicine discount greeter than price",
      });
      return;
    }
    const updateData = { ...data, feature_with_details: content, medicine_description: description, updatedDate: date };
    // console.log(updateData);

    axios
      .put(`http://localhost:5000/update-medicine/${data._id}`, updateData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Medicine Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/medicine-inventory");
        }
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Medicine Update Failed",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold my-5 text-title-color tracking-wide">Update Medicine</h3>
        <div className="divider" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-3 lg:pb-4">
          <div>
            <span>
              Pharmacist Name <small>(read only)</small>
            </span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" readOnly defaultValue={user?.displayName} type="text" {...register("pharmacist_name")} />
          </div>
          <div>
            <span>
              Pharmacist Email <small>(read only)</small>
            </span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" readOnly defaultValue={user?.email} type="email" {...register("pharmacist_email")} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-3 lg:pb-4">
          <div>
            <span>Medicine Name</span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" required placeholder="Enter medicine name" type="text" {...register("medicine_name")} />
          </div>
          <div>
            <span>Medicine Image Url</span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" type="text" required {...register("image")} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div className="w-full md:max-w-full lg:max-w-md">
            <span>Medicine Category</span>
            <Controller name="category" control={control} render={({ field }) => <Select isClearable required {...field} options={categories} placeholder="Select category" noOptionsMessage={() => "No category found"} />} />
          </div>
          <div className="w-full md:max-w-full lg:max-w-md">
            <span>
              Tags <small>(choose multiple tags)</small>
            </span>
            <Controller name="tags" control={control} render={({ field }) => <CreatableSelect required {...field} options={tags} isMulti placeholder="Select tags" />} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-3 lg:pb-4">
          <div>
            <span>Enter price</span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" required min={1} placeholder="Enter price" type="number" {...register("price")} />
          </div>
          <div>
            <span>Available Quantity</span>
            <input defaultValue={updateQuantity} onChange={handleUpdateQuantity} className="input input-bordered w-full md:max-w-full lg:max-w-md" min={1} placeholder="Enter available quantity" type="number" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-3 lg:pb-4">
          <div>
            <span>Enter Discount %</span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" required min={0} max={100} placeholder="Enter discount" type="number" {...register("discount")} />
          </div>
          <div>
            <span>Sku No.</span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" required placeholder="Enter sku" type="number" {...register("sku")} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-3 lg:pb-4">
          <div>
            <span>Brand Name</span>
            <input className="input input-bordered w-full md:max-w-full lg:max-w-md" required placeholder="Enter brand name" type="text" {...register("brand")} />
          </div>
          <div>
            <span className="label">Order Quantity</span>
            <span className="">Box</span>
            <input className="radio" required type="radio" value="Box" {...register("order_quantity")} />
            <span className="">Bottle</span>
            <input className="radio" required type="radio" value="Bottle" {...register("order_quantity")} />
            <span className="">Pcs</span>
            <input className="radio" required type="radio" value="Pcs" {...register("order_quantity")} />
          </div>
        </div>
        <div className="mb-5">
          <span>Medicine Summary</span>
          <textarea required {...register("medicine_summary", { required: true })} className="textarea textarea-bordered h-28 w-full resize-none" placeholder="Medicine description" />
        </div>
        <div className="pb-6">
          <h4>
            Medicine Features & Details <small>(you can write multiple features with details)</small>
          </h4>
          <JoditEditor ref={editor} value={content} onChange={(newContent) => setContent(newContent)} />
        </div>
        <div>
          <h4>Medicine Description</h4>
          <JoditEditor ref={editor} value={description} onChange={(newContent) => setDescription(newContent)} />
        </div>
        <div className="pt-5 lg:pt-10 text-center">
          <button className="submit-btn" type="submit">
            {" "}
            Update Medicine
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateMedicine;
