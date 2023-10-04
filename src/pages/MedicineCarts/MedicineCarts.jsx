/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCartMedicines from "../../hooks/useCartMedicines";
import MedicineCartItem from "./MedicineCartItem";

const MedicineCarts = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCartMedicines();

  const pricesWithDiscount = [];
  let totalPrice = 0;
  const totalPrices = [];
  let subTotal = 0;
  for (const items of cart) {
    pricesWithDiscount.push(
      items?.quantity * (items?.price - (items?.price / 100) * items?.discount),
    );
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
  const mainPrice = totalPrice + 75;

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You remove all items in cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Clear All",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${import.meta.env.VITE_API_URL}/medicineCarts?email=${
              user?.email
            }`,
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("All Item Removed");
              refetch();
            }
          });
      }
    });
  };
  return (
    <section className="my-container">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className=" flex-grow rounded-md">
          <h3 className=" flex justify-between bg-lite px-5 py-5 font-semibold tracking-wide text-title-color md:text-xl lg:px-8 lg:text-2xl">
            <span>{cart?.length} Item in Your Cart</span>
            {cart.length > 0 && (
              <button
                onClick={handleClearCart}
                type="button"
                className="flex cursor-pointer items-center gap-1 text-sm font-medium text-red-400 lg:text-xl"
              >
                <AiOutlineDelete /> Clear All
              </button>
            )}
          </h3>
          <div className=" border border-gray-3 p-5 lg:p-8">
            {cart.length > 0 ? (
              <div className="divide-y">
                {cart?.map((item) => (
                  <MedicineCartItem
                    key={item._id}
                    item={item}
                    refetch={refetch}
                  />
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 lg:gap-6">
                <h1 className="text-xl font-medium tracking-wide text-gray-6 lg:text-2xl lg:font-semibold">
                  Cart is Empty !
                </h1>
                <Link to="/medicines" className="my-btn-outline tracking-wide">
                  <HiOutlineShoppingBag className="text-xl" /> Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-md border border-gray-3 lg:h-96 lg:w-4/12">
          <h3 className="bg-lite px-5 py-5 font-semibold tracking-wide text-title-color md:text-xl lg:px-8 lg:text-2xl">
            Cart Total
          </h3>
          <div className="space-y-5 px-5 py-5 font-medium md:text-xl lg:px-8">
            <h3 className="flex justify-between font-semibold">
              SubTotal:
              <span className="flex items-center">৳ {subTotal.toFixed(2)}</span>
            </h3>
            <h3 className="flex justify-between font-semibold">
              Save Amount:
              <span className="flex items-center">
                ৳ {saveMoney.toFixed(2)}
              </span>
            </h3>
            <h3 className="flex justify-between font-semibold">
              Delivery Charge:
              <span className="flex items-center">৳ 75</span>
            </h3>
            <h3 className="flex justify-between font-semibold">
              Total:
              <span className="flex items-center">
                ৳ {mainPrice.toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="text-center ">
            <Link to="/orderCheckOut">
              <button
                type="button"
                className="my-btn w-full !rounded !rounded-t-none "
              >
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineCarts;
