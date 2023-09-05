import axios from "axios";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { BiLinkAlt, BiSolidCloudUpload } from "react-icons/bi";
import { MdDeleteForever, MdImageSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllImages } from "../../../../Features/Images/fetchAllImages";
import deleteIcon from "../../../../assets/Lottie/deleteIcon.json";
import searchIcon from "../../../../assets/Lottie/search.json";
import { AuthContext } from "../../../../contexts/AuthProvider";

const UploadImages = () => {
  const { user } = useContext(AuthContext);
  const [isearch, setISearch] = useState(false);
  const [searchBy, setSearchBy] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { allImages, isLoading } = useSelector((state) => state.allImages);

  useEffect(() => {
    const email = user?.email || "";
    dispatch(fetchAllImages({ email, searchBy }));
  }, [user?.email, dispatch, searchBy]);

  if (isLoading) {
    <p className="text-center mt-10">Loading........</p>;
  }

  const copyURl = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Image Url copied", {
      position: "top-center",
    });
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearchBy(searchItem);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    setLoading(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const image_url = imageData.data.display_url;
        // const deleteImage_url = imageData.data.delete_url;

        const newImageData = {
          photoURL: image_url,
          //   deletePhotoURL: deleteImage_url,
          email: user.email,
          name: data.name,
        };

        axios.post("http://localhost:5000/images", newImageData).then((res) => {
          //   console.log(res.data);
          if (res.data?.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Image uploaded successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
            dispatch(fetchAllImages(user?.email || ""));
            window.my_modal_ImageUpload.close();
            reset();
          }
        });
      });
  };

  return (
    <div className="px-5">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="lg:flex justify-between items-center mt-10 mb-5 px-2">
        <BiSolidCloudUpload onClick={() => window.my_modal_ImageUpload.showModal()} className="text-5xl text-my-primary cursor-pointer" />
        <h3 className="text-xl lg:text-3xl font-bold uppercase font-nunito">All Uploaded Images</h3>

        <div className="relative">
          <input
            onChange={handleSearch}
            className={`border py-1 pr-10 pl-3 border-slate-3 outline-my-primary rounded-3xl transition-all duration-500 ${isearch ? "block" : "hidden"}`}
            type="search"
            name="imgSearch"
            id=""
            placeholder="Search image by name"
          />
          {/* <MdImageSearch title="Search image" onClick={() => setISearch(true)} className={` absolute right-2 text-my-primary cursor-pointer ${!isearch ? "text-4xl -top-4" : "text-2xl top-1"}`} /> */}
          <Lottie
            animationData={searchIcon}
            title="Search image"
            onClick={() => setISearch(true)}
            className={` absolute right-2  cursor-pointer ${!isearch ? "h-14 w-14 -top-4" : "h-8 w-8 top-0"}`}
            loop
          />
        </div>
      </div>

      {allImages.length === 0 && (
        <div className="flex justify-center items-center">
          <img className="max-w-sm" src="https://i.ibb.co/4Wd3BdR/no-results.png" alt="No data found" />
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-8 gap-2 mb-10">
        {allImages.map((i) => (
          <div key={i._id} className="border border-gray-3 p-2 relative text-center rounded-md space-y-2 ">
            <button type="button" className="relative mb-9" onClick={() => copyURl(i?.photoURL)}>
              <h5 className="text-base font-semibold font-nunito text-title-color uppercase mt-1">{i?.name}</h5>
              <img className="h-20" src={i?.photoURL} alt="" />
            </button>
            <div className="rounded-b-md flex justify-center gap-2 py-1 bg-[#475569] bg-opacity-60 items-center absolute bottom-0 left-0 right-0">
              <BiLinkAlt onClick={() => copyURl(i?.photoURL)} title="Copy Image URL" className="text-2xl text-white rounded-full  hover:bg-my-accent bg-my-primary p-1 " />
              <Lottie animationData={deleteIcon} className="h-8 w-8" loop />
              {/* <MdDeleteForever onClick={() => copyURl(i?.photoURL)} title="Copy Image URL" className="text-2xl text-white rounded-full bg-[#dc2626] bg-opacity-50 hover:bg-red-400 p-1 " /> */}
            </div>
          </div>
        ))}
      </div>

      {/** *******review modal****************** */}
      <dialog id="my_modal_ImageUpload" className="modal">
        <div className="modal-box w-96">
          <form method="dialog" className="space-y-2">
            <button type="submit" className="btn btn-sm btn-circle btn-ghost bg-red-500 hover:bg-red-400 text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <img src="https://i.ibb.co/gJ6y9zj/picture.png" alt="" />
            </div>
            <input required type="file" className="file-input rounded file-input-bordered file-input-accent w-full" name="image" id="" {...register("image")} />
            <input placeholder="Enter photo name" required type="text" className="rounded border outline-my-accent outline-1 p-2 border-my-accent   w-full" name="image" id="" {...register("name")} />
            <button className="submit-btn cursor-pointer w-full rounded- py-2 rounded-md" type="submit">
              {loading ? "Uploading...." : "Upload Image"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UploadImages;
