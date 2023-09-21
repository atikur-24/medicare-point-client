/* eslint-disable no-unsafe-optional-chaining */
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { isValidDiscountApi } from "../../../Features/DiscountCodesApis/isValidDiscount";
import { sslPaymentApi } from "../../../Features/PaymentGetway/PaymentGetaway";
import { AuthContext } from "../../../contexts/AuthProvider";
import useCartMedicines from "../../../hooks/useCartMedicines";

const CheckouForm = () => {
  const currentDate = moment();
  // Add 1-3 days to the current date
  const oneDaysAhead = currentDate.add(1, "days").format("DD MMM");
  const threeDaysAhead = currentDate.add(3, "days").format("DD MMM");

  const [allTotal, setAllTotal] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const { user } = useContext(AuthContext);
  const [disAmount, setDisAmount] = useState(0);
  const [discountCode, setDiscountCode] = useState(0);
  const dispatch = useDispatch();
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
    const paymentDetails = { ...data, totalPayment: parseFloat((allTotal - disAmount).toFixed(2)) };
    dispatch(sslPaymentApi({ paymentDetails, cart, discountCode }));
  };

  const handelPromoCode = (event) => {
    event.preventDefault();
    const promoCode = event.target.promoCode.value;

    dispatch(isValidDiscountApi({ promoCode, email: user?.email })).then((res) => {
      const response = res.payload;

      if (response?.success) {
        setDiscountCode(promoCode);
        if (response?.discountType === "percent") {
          const discountAmount = ((allTotal * parseFloat(response?.discount)) / 100).toFixed(2);
          setDisAmount(discountAmount);
        } else {
          setDisAmount(response?.discount);
        }
        toast.success(response?.message, { autoClose: 1000, hideProgressBar: true, theme: "colored", pauseOnHover: false });
        event.target.reset();
      } else {
        setDisAmount(0);
        toast.error(response?.message, { autoClose: 1000, hideProgressBar: true, theme: "colored", pauseOnHover: false });
      }
    });

    // if (promoCode === "WELCOME50") {
    //   setAllTotal(allTotal - 50);
    //   toast.success("your promo code success fully used", { autoClose: 1000, hideProgressBar: true, theme: "colored", pauseOnHover: false });
    //   event.target.reset();
    // } else {
    //   toast.error("your promo code not matching", { autoClose: 1000, hideProgressBar: true, theme: "colored", pauseOnHover: false });
    // }
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

  function handelFillUp(e) {
    setIsSelected(e.target.checked);
  }
  // console.log(isSelected);

  return (
    <div className="bg-lite">
      <div className="my-container  ">
        <div className=" md:px-10 grid gap-12 grid-cols-1 lg:grid-cols-3">
          <div className="w-full md:col-span-2 ">
            <h4 className="lg:text-xl font-bold ">
              <span className="  md:text-xl lg:text-2xl font-bold bg-black text-white rounded-full px-2 md:px-3 py-1">1</span> Please Give you information
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-1 gap-4 lg:mt-12 mt-4 bg-white p-4 md:p-8 lg:p-14 rounded-lg">
              <div>
                <input onChange={(e) => handelFillUp(e)} id="select" type="checkbox" name="select" className=" focus:input-bordered input-accent border-2 rounded-lg border-gray-3 p-2" />
                <label htmlFor="select" className="font-medium lg:font-semibold pl-2 cursor-pointer">
                  Fill up Information from your Profile
                </label>
              </div>
              <div>
                <label htmlFor="name" className="font-medium lg:font-semibold pl-2 cursor-pointer">
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
                <label htmlFor="email" className="font-medium lg:font-semibold pl-2 cursor-pointer">
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
                  <label htmlFor="division" className="font-medium lg:font-semibold pl-2 cursor-pointer">
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
                  <label htmlFor="district" className="font-medium lg:font-semibold pl-2 cursor-pointer">
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
                <label htmlFor="location" className="font-medium lg:font-semibold pl-2 cursor-pointer">
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
                <label htmlFor="number" className="font-medium lg:font-semibold pl-2 cursor-pointer">
                  Give your Phone Number:
                </label>
                <input
                  id="number"
                  // defaultValue={isSelected ? "12335" : ""}
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
              <span className="md:text-xl lg:text-2xl font-bold bg-black text-white rounded-full px-[10px] py-1">2</span> Your Order
            </h4>
            <div className="lg:mt-12 mt-4 px-4 py-6 bg-white rounded-lg">
              <form onSubmit={handelPromoCode} className="flex items-start gap-3">
                <input
                  type="text"
                  name="promoCode"
                  id=""
                  placeholder="Use Promo Code"
                  className="placeholder-gray-4 max-w-xs rounded text-sm font-medium border-gray-3 border-b-2 focus:border-b-2 focus:outline-none mb-4 focus:border-accent"
                />
                <input type="submit" value="Apply" className="bg-my-accent hover:bg-my-primary cursor-pointer text-white px-2 rounded-md" />
              </form>

              <h3 className="text-lg font-semibold lg:font-bold">Your Totals Order Items: {cart?.length}</h3>
              <hr className="border-gray-3 my-2" />
              <div className="flex justify-between items-center font-medium lg:font-semibold">
                <h4>Expected Delivery:</h4>
                <h4 className="flex items-center">
                  {oneDaysAhead} - {threeDaysAhead}
                </h4>
              </div>
              <hr className=" border-gray-3 my-2" />
              <div className="flex justify-between items-center font-medium lg:font-semibold">
                <h4>Sub Total: </h4>
                <h4 className="flex items-center">৳ {subTotal}</h4>
              </div>
              {disAmount !== 0 && (
                <div className="flex justify-between items-center my-1 font-medium">
                  <h4 className="text-my-primary">{discountCode}: </h4>
                  <h4 className="flex items-center">- ৳ {disAmount}</h4>
                </div>
              )}
              <div className="flex justify-between items-center font-medium lg:font-semibold mt-2">
                <h4>Save Amount: </h4>
                <h4 className="flex items-center">৳ {(parseFloat(saveMoney) + parseFloat(disAmount))?.toFixed(2)}</h4>
              </div>
              <div className="flex justify-between items-center font-medium lg:font-semibold mt-2">
                <h4>Delivery Charge: </h4>
                <h4 className="flex items-center">৳ 75</h4>
              </div>
              <hr className=" border-gray-3 my-2" />
              <div className="flex justify-between items-center text-lg font-semibold lg:font-bold mt-2">
                <h4>Total Price: </h4>
                <h4 className="flex items-center">৳ {(allTotal - disAmount)?.toFixed(2)}</h4>
              </div>
              {/* <div>dd</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckouForm;
