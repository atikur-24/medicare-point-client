/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCartMedicines from "../../hooks/useCartMedicines";
import MedicineCartItem from "./MedicineCartItem";

const MedicineCarts = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCartMedicines();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const query = window.location.search;
  console.log(query);

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

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You remove all items in cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16b4ac",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Clear All",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/medicineCarts?email=${user?.email}`).then((res) => {
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
      <div className="lg:flex gap-8">
        <div className="border border-gray-3 rounded-md flex-grow">
          <h3 className="text-xl lg:text-2xl font-semibold bg-lite tracking-wide text-title-color py-5 px-5 lg:px-8 flex justify-between">
            <span>{cart?.length} Item in Your Cart</span>
            <button onClick={handleClearCart} type="button" className="lg:text-xl flex items-center gap-1 text-red-400 font-medium cursor-pointer">
              <AiOutlineDelete /> Clear All
            </button>
          </h3>
          <div className="p-5 lg:p-8">
            {cart?.map((item) => (
              <MedicineCartItem key={item._id} item={item} refetch={refetch} />
            ))}
          </div>
        </div>
        <div className="border border-gray-3 rounded-md lg:w-4/12 lg:h-96">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-wide text-title-color bg-lite py-5 px-5 lg:px-8">Cart Total</h3>
          <div className="py-5 px-5 lg:px-8 space-y-5 text-xl font-medium">
            <h3 className="flex justify-between font-semibold">
              SubTotal:
              <span className="flex items-center">
                <TbCurrencyTaka /> {subTotal.toFixed(2)}
              </span>
            </h3>
            <h3 className="flex justify-between font-semibold">
              Save Amount:
              <span className="flex items-center">
                <TbCurrencyTaka /> {saveMoney.toFixed(2)}
              </span>
            </h3>
            <h3 className="flex justify-between font-semibold">
              Total:
              <span className="flex items-center">
                <TbCurrencyTaka /> {totalPrice.toFixed(2)}
              </span>
            </h3>
            <div className="mt-5">
              <Link to="/orderCheckOut">
                <button type="button" className="cart-btn">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineCarts;
