import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addDiscountCodeApi } from "../../../../Features/DiscountCodesApis/addDiscountCode";
import { fetchAllDiscountCodes } from "../../../../Features/DiscountCodesApis/allDiscountCodes";
import { deleteDiscountCodesApi } from "../../../../Features/DiscountCodesApis/deleteDiscountCodes";
import { updateDiscountCodeApi } from "../../../../Features/DiscountCodesApis/updateDiscountCode";
import { AuthContext } from "../../../../contexts/AuthProvider";

const date = moment().format("Do MMM YY");

const DiscountCodes = () => {
  const { user } = useContext(AuthContext);
  const [discountCodes, setDiscountCodes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoading2, setLoading2] = useState(false);
  const [singleDiscount, setSingleDiscount] = useState({});
  const dispatch = useDispatch();
  // pagination
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  let filteredDiscount = discountCodes;

  if (searchName) {
    filteredDiscount = discountCodes.filter((discount) =>
      discount.discountName.toLowerCase().includes(searchName.toLowerCase()),
    );
  } else if (filterStatus !== "All Status") {
    filteredDiscount = discountCodes.filter((status) =>
      status.status.toLowerCase().includes(filterStatus.toLowerCase()),
    );
  }

  const paginatedDiscount = filteredDiscount?.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllDiscountCodes(user?.email)).then((res) => {
      setDiscountCodes(res.payload);
      setLoading(false);
    });
  }, [dispatch, user?.email]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.createdDate = date;
    data.addedBy = user?.email;
    setLoading2(true);
    dispatch(addDiscountCodeApi(data)).then((res) => {
      if (res.payload?.insertedId) {
        reset();
        window.my_modal_addDiscountCode.close();
        dispatch(fetchAllDiscountCodes(user?.email)).then((res2) => {
          setDiscountCodes(res2.payload);
        });
        toast.success("Discount code has been created");
      } else if (res.payload?.message) {
        reset();
        window.my_modal_addDiscountCode.close();
        dispatch(fetchAllDiscountCodes(user?.email)).then((res2) => {
          setDiscountCodes(res2.payload);
        });
        // toast.error("Discount code already exist");
        Swal.fire({
          icon: "error",
          title: "Discount code already exist",
          text: "Please create discount code with another name",
        });
      }
      setLoading2(false);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const discountName = form.discountName.value;
    const discount = form.discount.value;
    const discountType = form.discountType.value;
    const status = form.status.value;

    const data = { discountName, discount, discountType, status };
    setLoading(true);
    dispatch(updateDiscountCodeApi({ data, id: singleDiscount?._id })).then(
      (res) => {
        if (res.payload.modifiedCount) {
          window.my_modal_updateDiscountCode.close();
          dispatch(fetchAllDiscountCodes(user?.email)).then((res2) => {
            setDiscountCodes(res2.payload);
          });
          form.reset();
          toast.success("Discount code has been updated");
        }
        setLoading(false);
      },
    );
  };

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDiscountCodesApi(id)).then((res) => {
          if (res.payload.deletedCount) {
            dispatch(fetchAllDiscountCodes(user?.email)).then((res2) => {
              setDiscountCodes(res2.payload);
            });
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const totalActive = discountCodes.filter(
    (statusCode) => statusCode?.status === "Active",
  );
  const totalExprired = discountCodes.filter(
    (statusCode) => statusCode?.status === "Expired",
  );

  return (
    <div>
      <div className="mb-8 flex  justify-between">
        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Discount Codes
            </div>
            <div className="stat-value text-gray-7">
              {discountCodes?.length || 0}{" "}
            </div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Active Codes
            </div>
            <div className="stat-value text-my-primary">
              {totalActive?.length || 0}{" "}
            </div>
          </div>
          <div className="stat place-items-center space-y-2">
            <div className="stat-title font-nunito font-bold uppercase text-title-color ">
              Expired Codes
            </div>
            <div className="stat-value text-red-400">
              {totalExprired?.length || 0}{" "}
            </div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat place-items-center space-y-2">
            <button
              onClick={() => window.my_modal_addDiscountCode.showModal()}
              type="button"
              className="text-xl"
            >
              <span className="text-3xl font-bold">+</span>
              <p>Create discount code</p>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-between">
        <div className="join">
          <input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            type="search"
            className="f input join-item input-bordered !rounded-md outline-none placeholder:text-gray-6 focus:!outline-none"
            placeholder="search by name"
          />
        </div>
        <div className="flex items-center gap-4 ">
          <h2 className="w-[120px]">Filter by</h2>
          <select
            onChange={(e) => {
              setFilterStatus(e?.target?.value);
            }}
            className="select select-bordered w-full max-w-xs outline-none hover:outline-none focus:!outline-none"
          >
            <option selected>All Status</option>
            <option>Active</option>
            <option>Expired</option>
          </select>
        </div>
      </div>
      <div className="mb-20 overflow-x-auto  ">
        <table className="table  table-zebra border border-gray-3 bg-white">
          {/* head */}
          <thead className="rounded-lg rounded-t-md bg-my-primary/90 text-sm text-white">
            <tr className=" rounded-t-md">
              <th className="rounded-tl-md">#</th>
              <th>Discount Code</th>
              <th>Discount</th>
              <th>Create Date</th>
              <th>Status</th>
              <th className="rounded-tr-md">Actions</th>
            </tr>
          </thead>

          {!isLoading && (
            <tbody>
              {paginatedDiscount?.map((disc, index) => (
                <tr key={disc?._id} className="">
                  <td className=" font-bold ">{index + 1}</td>
                  <td className="flex justify-center">
                    <h4>{disc?.discountName}</h4>
                  </td>
                  <td className="font-medium ">
                    <span>{disc?.discount}</span>
                    <span>
                      {disc?.discountType === "percent" ? " %" : " Taka"}
                    </span>
                  </td>
                  <td className=" font-medium">{disc?.createdDate}</td>
                  <td
                    className={`font-medium ${
                      disc?.status === "Active"
                        ? "text-my-primary"
                        : "text-red-500"
                    }`}
                  >
                    {disc?.status}
                  </td>
                  <td className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        setSingleDiscount(disc);
                        window.my_modal_updateDiscountCode.showModal();
                      }}
                      type="button"
                    >
                      <BiEdit className="rounded-full bg-my-primary p-1 text-3xl text-[white]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handelDelete(disc?._id)}
                      className=" rounded-full bg-red-500/30"
                    >
                      <RiDeleteBinLine className="p-1  text-3xl text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {/* <div className="mt-44">{isLoading && <Loader spinner />}</div> */}
        <div className="flex items-center justify-end gap-5 pt-5 lg:gap-7">
          {/* Row per page view */}
          <div>
            <label className="mr-2 text-gray-6">Rows Per Page:</label>
            <select
              className="p-1"
              value={perPage}
              onChange={(e) => {
                setCurrentPage(1);
                setPerPage(parseInt(e.target.value, 10));
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          {/* Previous and next button (pagination) */}
          <div className="space-x-3">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleLeftSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
            <button
              onClick={() => {
                if (currentPage * perPage < filteredDiscount?.length) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage * perPage >= filteredDiscount?.length}
              className={`${
                currentPage * perPage >= filteredDiscount?.length
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-200 bg-white"
              }`}
              type="button"
            >
              <LiaAngleRightSolid className="text-xl font-semibold lg:text-2xl lg:font-extrabold" />
            </button>
          </div>
        </div>
      </div>

      {/* add discount code  */}
      <dialog id="my_modal_addDiscountCode" className="modal">
        <div className="modal-box w-96">
          <form method="dialog" className="space-y-2">
            <button
              type="submit"
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 bg-red-500 text-white hover:bg-red-400"
            >
              ✕
            </button>
          </form>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-center font-nunito text-lg font-bold uppercase">
              Add New Discount Code
            </h4>
            <div>
              <img
                className="mx-auto w-60"
                src="https://i.ibb.co/pWf1PLL/coupon.png"
                alt=""
              />
            </div>

            <div className="space-y-2">
              <input
                required
                placeholder="Enter discount name"
                type="text"
                name="discountName"
                {...register("discountName")}
                className="w-full rounded border border-my-accent p-2 outline-1   outline-my-accent"
                id=""
              />
              <input
                required
                placeholder="Enter discount amount/percent"
                type="number"
                name="discount"
                {...register("discount")}
                className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
                id=""
              />
              <select
                placeholder="Select discount Type"
                name="discountType"
                {...register("discountType")}
                className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
              >
                <option selected disabled value="percent">
                  Select discount Type
                </option>
                <option value="percent">Percent</option>
                <option value="fixed">Fixed</option>
              </select>
              <select
                name="status"
                {...register("status")}
                className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
              >
                <option selected disabled value="Active">
                  Select discount status
                </option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
              </select>
            </div>

            <button
              className="submit-btn rounded- w-full cursor-pointer rounded-md py-2"
              type="submit"
            >
              {isLoading2 ? "Adding...." : "Add Discount Code"}
            </button>
          </form>
        </div>
      </dialog>

      {/* update discount code  */}
      <dialog id="my_modal_updateDiscountCode" className="modal">
        <div className="modal-box w-96">
          <form method="dialog" className="space-y-2">
            <button
              type="submit"
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 bg-red-500 text-white hover:bg-red-400"
            >
              ✕
            </button>
          </form>
          <form className="space-y-3" onSubmit={handleUpdate}>
            <h4 className="text-center font-nunito text-lg font-bold uppercase">
              Update Discount Code
            </h4>
            <div>
              <img
                className="mx-auto w-60"
                src="https://i.ibb.co/pWf1PLL/coupon.png"
                alt=""
              />
            </div>

            <div className="space-y-2">
              <input
                readOnly
                defaultValue={singleDiscount?.discountName}
                type="text"
                name="discountName"
                className="w-full rounded border border-my-accent p-2 outline-1   outline-my-accent"
                id=""
              />
              <input
                required
                defaultValue={singleDiscount?.discount}
                placeholder="Enter discount amount/percent"
                type="number"
                name="discount"
                className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
                id=""
              />
              <select
                placeholder="Select discount Type"
                name="discountType"
                className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
              >
                <option value={singleDiscount?.discountType}>
                  {singleDiscount?.discountType}
                </option>
                {/* <option disabled value="percent">
                  Select discount Type
                </option> */}
                <option value="percent">Percent</option>
                <option value="fixed">Fixed</option>
              </select>
              <select
                name="status"
                className="w-full rounded border border-my-accent p-2 outline-1 outline-my-accent"
              >
                <option value={singleDiscount?.status}>
                  {singleDiscount?.status}
                </option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
              </select>
            </div>

            <button
              className="submit-btn rounded- w-full cursor-pointer rounded-md py-2"
              type="submit"
            >
              {isLoading2 ? "Uploading...." : " Update Discount Code"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DiscountCodes;
