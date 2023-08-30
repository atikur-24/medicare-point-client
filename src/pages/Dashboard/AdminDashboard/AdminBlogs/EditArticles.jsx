import { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert library
// import { fetchAllBlogs } from "../../../../Features/Blogs/allBlogs";
import { fetchAllBlogs } from "../../../../Features/Blogs/allBlogs";
import { deleteBlogApi } from "../../../../Features/Blogs/deleteBlog";

const EditArticles = () => {
  const { allBlogs } = useSelector((state) => state.allBlogs);
  console.log(allBlogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  const handlerDelete = (id) => {
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
        dispatch(deleteBlogApi(id));
        dispatch(fetchAllBlogs());
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-8">
        {allBlogs.map((allBlog) => (
          <div key={allBlog._id} className="grid grid-cols-1 gap-4 justify-center items-center rounded-md shadow-sm p-2 border border-gray-3">
            <h2 className="text-center items-center gap-3 font-medium text-[16px] tracking-wide">{allBlog.title}</h2>
            <img src={allBlog.image} alt="img" className="h-32 mx-auto" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="space-x-1 flex justify-end">
              <Link to={`/dashboard/update-health-articles/${allBlog._id}`}>
                <label className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent">
                  <TiEdit className="text-lg" />
                </label>
              </Link>
              <button type="button" onClick={() => handlerDelete(allBlog._id)} className="btn btn-circle btn-sm bg-red-500 text-white hover:bg-my-pink">
                <RiDeleteBinLine className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditArticles;
