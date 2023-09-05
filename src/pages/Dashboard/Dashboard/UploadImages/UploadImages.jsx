import axios from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { BiLinkAlt, BiSolidCloudUpload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchAllImages } from "../../../../Features/Images/fetchAllImages";
import { AuthContext } from "../../../../contexts/AuthProvider";

const UploadImages = () => {
  const { user } = useContext(AuthContext);

  const dispatch = useDispatch();
  const { allImages, isLoading } = useSelector((state) => state.allImages);

  useEffect(() => {
    dispatch(fetchAllImages(user?.email || ""));
  }, [user?.email, dispatch]);

  if (isLoading) {
    <p className="text-center mt-10">Loading........</p>;
  }

  const copyURl = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Image Url copied", {
      position: "top-center",
    });
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
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
      <div className="flex justify-between items-center mt-10 mb-5 px-2">
        <h3 className=" text-3xl font-semibold">All Uploaded Images</h3>
        <BiSolidCloudUpload onClick={() => window.my_modal_ImageUpload.showModal()} className="text-5xl text-slate-6 cursor-pointer" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 mb-10">
        {allImages.map((i) => (
          <div key={i._id} className="border border-gray-3 p-2 flex justify-center items-center relative">
            <button type="button" onClick={() => copyURl(i?.photoURL)}>
              <img src={i?.photoURL} alt="" />
              <BiLinkAlt title="Copy Image URL" className="text-2xl text-white rounded-full bg-my-accent hover:bg-my-primary p-1 absolute top-1 right-1" />
            </button>
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
            <button className="submit-btn cursor-pointer w-full rounded- py-2 rounded-md" type="submit">
              Upload Image
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UploadImages;
