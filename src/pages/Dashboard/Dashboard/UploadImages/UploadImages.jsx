import axios from "axios";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { BiLinkAlt, BiSolidCloudUpload } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteImageApi } from "../../../../Features/Images/deleteImage";
import { fetchAllImages } from "../../../../Features/Images/fetchAllImages";
import deleteIcon from "../../../../assets/Lottie/deleteIcon.json";
import searchIcon from "../../../../assets/Lottie/search.json";
import { AuthContext } from "../../../../contexts/AuthProvider";

const UploadImages = () => {
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [isearch, setISearch] = useState(false);
  const [searchBy, setSearchBy] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { allImages } = useSelector((state) => state.allImages);

  useEffect(() => {
    const email = user?.email || "";
    dispatch(fetchAllImages({ email, searchBy }));
  }, [user?.email, dispatch, searchBy, loading]);

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
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
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

        axios
          .post(`${import.meta.env.VITE_API_URL}/images`, newImageData)
          .then((res) => {
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
              window.my_modal_ImageUpload.close();
              reset();
            }
          });
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        dispatch(deleteImageApi(id)).then((res) => {
          if (res.payload?.deletedCount > 0);
          setLoading(false);
        });
      }
    });
  };

  const imagePerPage = 18;
  const startIndex = currentPage * imagePerPage;
  const endIndex = startIndex + imagePerPage;
  const PaginationImages = allImages?.slice(startIndex, endIndex);
  const pageCount = Math.ceil(allImages.length / imagePerPage);

  const handlePageClick = (sleetedPage) => {
    setCurrentPage(sleetedPage.selected);
  };

  //   if (isLoading) {
  //     return <Loader spinner />;
  //   }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center justify-between md:mb-5 md:mt-10">
        <div className="mb-8">
          <div className="stats shadow">
            <div className="stat place-items-center space-y-2">
              <div className="stat-title font-nunito font-bold uppercase text-title-color ">
                Image{" "}
              </div>
              <div className="stat-value text-my-primary">
                {allImages.length || 0}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => window.my_modal_ImageUpload.showModal()}
          className="md:hidden"
          title="Upload Image"
          type="button"
        >
          <BiSolidCloudUpload className="cursor-pointer text-5xl text-my-primary" />{" "}
          Upload
        </button>

        <div className="hidden lg:block">
          <div className="items-center gap-10 md:flex md:justify-around">
            <button
              onClick={() => window.my_modal_ImageUpload.showModal()}
              title="Upload Image"
              type="button"
            >
              <BiSolidCloudUpload className="cursor-pointer text-5xl text-my-primary" />{" "}
              Upload
            </button>
            <div className="relative">
              <input
                onChange={handleSearch}
                className={`rounded-3xl border border-slate-3 py-2 pl-3 pr-10 outline-my-primary transition-all duration-500 ${
                  isearch ? "block" : "hidden"
                }`}
                type="search"
                name="imgSearch"
                id=""
                placeholder="Search image by name"
              />
              <div>
                <Lottie
                  animationData={searchIcon}
                  title="Search image"
                  onClick={() => setISearch(true)}
                  className={`  right-2  cursor-pointer ${
                    !isearch ? " -top-4 h-14 w-14" : "absolute top-1 h-8 w-8"
                  }`}
                  loop
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {allImages?.length === 0 && (
        <div className="flex items-center justify-center ">
          <img
            className="w-64"
            src="https://i.ibb.co/4Wd3BdR/no-results.png"
            alt="No data found"
          />
        </div>
      )}

      <div>
        <div className="mb-10 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {PaginationImages.map((i) => (
            <div
              key={i._id}
              className=" box-shadow relative space-y-2 rounded-md border border-gray-3 bg-white p-2 text-center "
            >
              <button
                type="button"
                className="relative mb-12 space-y-2"
                onClick={() => copyURl(i?.photoURL)}
              >
                <h2 className="mt-1 font-nunito text-base font-semibold uppercase text-title-color">
                  {i?.name}
                </h2>
                <figure className="flex justify-center">
                  <img className="h-20 " src={i?.photoURL} alt="" />
                </figure>
              </button>
              <div className="absolute bottom-0 left-0 right-0 flex items-center  justify-center gap-2 rounded-b-md bg-[#475569]/60 py-1">
                <BiLinkAlt
                  onClick={() => copyURl(i?.photoURL)}
                  title="Copy Image URL"
                  className="rounded-full bg-my-primary p-1  text-2xl text-white hover:bg-my-accent "
                />
                <Lottie
                  onClick={() => handleDelete(i._id)}
                  animationData={deleteIcon}
                  className="h-8 w-8 cursor-pointer"
                  loop
                />
                {/* <MdDeleteForever onClick={() => copyURl(i?.photoURL)} title="Copy Image URL" className="text-2xl text-white rounded-full bg-[#dc2626] bg-opacity-50 hover:bg-red-400 p-1 " /> */}
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          className="my-auto flex items-center justify-center space-x-3 pb-5 text-center  align-middle font-semibold"
          activeClassName="bg-my-primary text-white rounded-full px-4 py-2"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
        />
      </div>

      {/** *******review modal****************** */}
      <dialog id="my_modal_ImageUpload" className="modal">
        <div className="modal-box w-96">
          <form method="dialog" className="space-y-2">
            <button
              type="submit"
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 bg-red-500 text-white hover:bg-red-400"
            >
              ✕
            </button>
          </form>
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <img src="https://i.ibb.co/gJ6y9zj/picture.png" alt="" />
            </div>
            <input
              required
              type="file"
              className="file-input file-input-bordered file-input-accent w-full rounded"
              name="image"
              id=""
              {...register("image")}
            />
            <input
              placeholder="Enter photo name"
              required
              type="text"
              className="w-full rounded border border-my-accent p-2 outline-1   outline-my-accent"
              name="image"
              id=""
              {...register("name")}
            />
            <button
              className="submit-btn rounded- w-full cursor-pointer rounded-md py-2"
              type="submit"
            >
              {loading ? "Uploading...." : "Upload Image"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UploadImages;
