import axios from "axios";
// import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useCartMedicines from "../../hooks/useCartMedicines";
import MedicineCartItem from "./MedicineCartItem";

const MedicineCarts = () => {
  const [cart, refetch] = useCartMedicines();

  const itemsPrices = [];
  let totalPrices = 0;

  for (const items of cart) {
    itemsPrices.push(items?.price * 2);
  }

  for (const price of itemsPrices) {
    totalPrices += price;
  }

  console.log(itemsPrices);
  console.log("totalPrices", totalPrices);

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
        axios.delete("http://localhost:5000/medicineCarts").then(() => toast.success("All Item Removed"));
        refetch();
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
          <div className="py-5 px-5 lg:px-8 space-y-8 text-xl font-medium">
            <h3>SubTotal: TK 650</h3>
            <h3>Save Ammount: TK 170</h3>
            <h3>Total: TK 890</h3>
            <button type="button" className="cart-btn">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineCarts;
