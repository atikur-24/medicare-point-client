/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { sslPaymentApi } from "../../../Features/PaymentGetway/PaymentGetaway";
import { AuthContext } from "../../../contexts/AuthProvider";
import useCartMedicines from "../../../hooks/useCartMedicines";

const CheckouForm = () => {
  const [allTotal, setAllTotal] = useState(0);
  // const [currentUserData, setCurrentUserData] = useState({});
  // const [allcurrentUserData, setAllCurrentUserData] = useState({});
  // const setValue = () => {
  //   setCurrentUserData(allcurrentUserData);
  //   toast.success("Information Fill up Success", { position: "top-center", theme: "colored", autoClose: 3000, pauseOnHover: false });
  // };
  const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/users").then((res) => {
  //     // Find the current user's data based on their email
  //     const currentUser = res.data.find((userData) => userData.email === user.email);

  //     if (currentUser) {
  //       setAllCurrentUserData(currentUser);
  //     }
  //   });
  // }, [user.email]);
  const dispatch = useDispatch();
  //   console.log(user?.displayName);

  const [cart] = useCartMedicines();
  const pricesWithDiscount = [];
  let totalPrice = 0;
  const totalPrices = [];
  let subTotal = 0;
  for (const items of cart) {
    pricesWithDiscount.push(items?.quantity * (items?.price - (items?.price / 100) * items?.discount));
  }
  for (const price of pricesWithDiscount) {
    totalPrice += price;
  }
  for (const items of cart) {
    totalPrices.push(items?.price * items?.quantity);
  }

  for (const price of totalPrices) {
    subTotal += price;
  }

  const saveMoney = subTotal - totalPrice;
  const priceWithShiping = totalPrice + 75;

  useEffect(() => {
    setAllTotal(priceWithShiping);
  }, [priceWithShiping]);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    const paymentDetails = { ...data, totalPayment: parseFloat(allTotal.toFixed(2)) };
    // console.log(paymentDetails);
    dispatch(sslPaymentApi({ paymentDetails, cart }));
    // console.log(paymentDetails);
    // reset();
  };

  const handelPromoCode = (event) => {
    event.preventDefault();
    const promoCode = event.target.promoCode.value;
    if (promoCode === "WELCOME50") {
      setAllTotal(allTotal - 50);
      Swal.fire("Successful", "your promo code success fully used.", "success");
    } else {
      Swal.fire("Not Matching", "your promo code not matching.", "error");
    }
    event.target.reset();
  };

  const divisions = ["Dhaka", "Chattogram", "Barishal", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"];
  const districts = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Sylhet",
    "Jessore",
    "Dinajpur",
    "Gopalganj",
    "Gazipur",
    "Mymensingh",
    "Comilla",
    "Barisal",
    "Narayanganj",
    "Faridpur",
    "Bogra",
    "Pabna",
    "Rangamati",
    "Kushtia",
    "Rangpur",
    "Manikganj",
    "Noakhali",
    "Khulna",
    "Tangail",
    "Panchagarh",
    "Bhola",
    "Bandarban",
    "Chandpur",
    "Habiganj",
    "Lakshmipur",
    "Barguna",
    "Jhalokati",
    "Pirojpur",
    "Patuakhali",
    "Jhenaidah",
    "Narail",
    "Magura",
    "Lalmonirhat ",
    "Kurigram",
    "Nilphamari",
    "Gaibandha",
    "Thakurgaon",
    "Satkhira",
    "Bagerhat",
    "Chuadanga",
    "Meherpur",
    "Sirajganj",
    "Joypurhat",
    "Natore",
    "Naogaon",
    "Nawabganj",
    "Khagrachhari",
    "Feni",
    "Brahmanbaria",
    "Sunamganj",
    "Cox's Bazar",
    "Moulvibazar",
    "Shariatpur",
    "Madaripur",
    "Rajbari",
    "Kishoreganj",
    "Jamalpur",
    "Sherpur",
    "Netrakona",
    "Munshiganj",
    "Narsingdi",
  ];

  return (
    <div className="bg-lite">
      <div className="my-container  ">
        <div className="px-10 grid gap-12 grid-cols-1 md:grid-cols-3">
          <div className="w-full md:col-span-2 ">
            <h4 className="text-xl font-bold ">
              <span className="text-2xl font-bold bg-black text-white rounded-full px-3 py-1">1</span> Please Give you information
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-1 gap-4 mt-12 bg-white p-14 rounded-lg">
              <div>
                <label htmlFor="name" className="font-semibold pl-2 cursor-pointer">
                  Name:
                </label>
                <input
                  id="name"
                  readOnly
                  type="text"
                  defaultValue={user?.displayName}
                  {...register("name", { required: true })}
                  className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
                />
                {errors.name && <small>Please write your name</small>}
              </div>
              <div>
                <label htmlFor="email" className="font-semibold pl-2 cursor-pointer">
                  Write your Email:
                </label>
                <input
                  id="email"
                  readOnly
                  type="email"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                  className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
                />
                {errors.email && <small>Please wite your email</small>}
              </div>

              <div className=" grid  grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="division" className="font-semibold pl-2 cursor-pointer">
                    Select your Division
                  </label>
                  <select id="division" {...register("division", { required: true })} className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2">
                    <option>Select Your Division Name</option>
                    {divisions.map((division, index) => (
                      <option key={index} value={division}>
                        {division}
                      </option>
                    ))}
                  </select>
                  {errors.division && <small>please select your division</small>}
                </div>

                <div>
                  <label htmlFor="district" className="font-semibold pl-2 cursor-pointer">
                    Select your District
                  </label>
                  <select id="district" {...register("district", { required: true })} className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2">
                    <option>Select Your Division Name</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  {errors.district && <small>please select your district </small>}
                </div>
              </div>

              <div>
                <label htmlFor="location" className="font-semibold pl-2 cursor-pointer">
                  Write your Full Location:
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="write your full location"
                  {...register("location", { required: true })}
                  className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
                />
                {errors.email && <small>Please wite your full location</small>}
              </div>

              <div>
                <label htmlFor="number" className="font-semibold pl-2 cursor-pointer">
                  Give your Phone Number:
                </label>
                <input
                  id="number"
                  type="number"
                  placeholder="Give your phone number"
                  {...register("number", { required: true })}
                  className="w-full focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2"
                />
                {errors.email && <small>Please Give your phone number</small>}
              </div>

              <input type="submit" value="Buy Now" className="my-btn " />
            </form>
          </div>
          <div className="w-full">
            <h4 className="text-xl font-bold ">
              <span className="text-2xl font-bold bg-black text-white rounded-full px-[10px] py-1">2</span> Your Order
            </h4>
            <div className="mt-12 bg-white py-14 rounded-lg">
              <form onSubmit={handelPromoCode} className="text-center space-x-3">
                <input
                  type="text"
                  name="promoCode"
                  id=""
                  placeholder="Use Promo Code"
                  className="placeholder-gray-4 rounded text-sm font-medium border-gray-3 px-3 w-1/2 border-b-2 focus:border-b-2 focus:outline-none mb-4 focus:border-accent"
                />
                <input type="submit" value="Apply" className="bg-my-accent hover:bg-my-primary cursor-pointer text-white px-2 rounded-md" />
              </form>

              <h3 className="text-lg font-bold px-14">Your Totals Order Items: {cart?.length}</h3>
              <hr className=" border-gray-3 my-2" />
              <div className="flex justify-between items-center px-14 font-semibold">
                <h4>Sub Total: </h4>
                <h4 className="flex items-center">৳ {subTotal}</h4>
              </div>
              <div className="flex justify-between items-center px-14 font-semibold mt-2">
                <h4>Save Amount: </h4>
                <h4 className="flex items-center">৳ {saveMoney.toFixed(2)}</h4>
              </div>
              <div className="flex justify-between items-center px-14 font-semibold mt-2">
                <h4>Delivery Charge: </h4>
                <h4 className="flex items-center">৳ 75</h4>
              </div>
              <hr className=" border-gray-3 my-2" />
              <div className="flex justify-between items-center px-14 text-lg font-bold mt-2">
                <h4>Total Price: </h4>
                <h4 className="flex items-center">৳ {allTotal?.toFixed(2)}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckouForm;
