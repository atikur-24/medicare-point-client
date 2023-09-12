import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import axios from "axios";
import { useEffect } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import HtmlParser from "react-html-parser";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailData } from "../../../../Features/AllMedicines/detailData";
import Loader from "../../../../components/Loader";

const DashboardMedicineDetail = () => {
  const params = useParams();
  const api = `medicines/details/${params?.id}`;
  const { data, isLoading } = useSelector((state) => state.detailData);

  const { medicine_name, image, available_quantity, brand, category, rating, price, discount, date, status, feature_with_details, medicine_description, _id } = data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailData(api));
  }, [dispatch, api]);

  const handelChangeStatus = (id, newStatus) => {
    const statusApproved = { status: newStatus };
    axios.patch(`http://localhost:5000/medicine-status/${id}`, statusApproved).then((res) => {
      // console.log(res.data);
      dispatch(fetchDetailData(api));
    });
  };

  return (
    <div className=" p-6">
      {isLoading ? (
        <Loader spinner />
      ) : (
        <div className="bg-white p-10 rounded-md  ">
          <div>
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="w-full">
                <h2 className="text-xl font-bold">{medicine_name}</h2>
                <img className="w-full mt-5 shadow-md border-dashed border-[1px] rounded-md border-my-primary" src={image} alt="" />
                <div className="mt-8">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <p className="flex items-center gap-3 font-semibold">
                        Rating: <ReactStarsRating isEdit={false} size={20} className="flex" value={rating} />
                      </p>
                      <p className="font-semibold">
                        Brand Name: <span className="font-normal">{brand}</span>
                      </p>
                      <p className="font-semibold">
                        Price: <span className="font-normal text-[#FFA500]">{price} ৳</span>
                      </p>
                      <p className="font-semibold">
                        Upload Date: <span className="font-normal">{date}</span>
                      </p>
                      <p className="font-semibold">
                        Medicine Status:{" "}
                        <span
                          className={`font-semibold ${status === "approved" ? "text-my-accent" : ""} ${status === "pending" ? "text-yellow-500" : ""} ${status === "denied" ? "text-red-500" : ""}`}
                        >
                          {status}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        available Quantity: <span className="text-my-accent">{available_quantity}</span>
                      </p>
                      <p className="font-semibold">
                        Category: <span className="font-normal">{category?.label}</span>
                      </p>
                      <p className="font-semibold">
                        Discount: <span className="font-normal">{discount}%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <h2 className="text-xl font-bold">Medicine Features </h2>
                  <p className="text-gray-5">{HtmlParser(feature_with_details)}</p>
                </div>
              </div>
            </div>
            <hr className="my-5  border-gray-4" />
            <div>
              <h2 className="text-xl font-bold">Medicine Description</h2>
              <p className="mt-2 text-gray-5">{medicine_description}</p>
            </div>
            <div className="text-end mt-8">
              <Menu
                menuButton={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <MenuButton className=" btn hover:bg-my-primary inline-flex items-center bg-my-accent text-white  capitalize rounded-md">
                    {status}
                    <MdKeyboardArrowDown className="text-2xl " />
                  </MenuButton>
                }
                transition
              >
                <MenuItem disabled={status === "approved"} onClick={() => handelChangeStatus(_id, "approved")} className="font-semibold  text-my-primary">
                  Approve
                </MenuItem>
                <MenuItem disabled={status === "denied"} onClick={() => handelChangeStatus(_id, "denied")} className="font-semibold  text-red-500">
                  Deny
                </MenuItem>
                <MenuItem disabled={status === "pending"} onClick={() => handelChangeStatus(_id, "pending")} className="font-semibold text-yellow-500">
                  Pending
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardMedicineDetail;
