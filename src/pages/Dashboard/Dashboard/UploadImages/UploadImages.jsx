import { useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { BiLinkAlt, BiSolidCloudUpload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
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

  return (
    <div className="px-5">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between items-center mt-10 mb-5 px-2">
        <h3 className=" text-3xl font-semibold">All Uploaded Images</h3>
        <BiSolidCloudUpload className="text-5xl text-slate-6" />
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
    </div>
  );
};

export default UploadImages;
