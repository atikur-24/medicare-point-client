/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addPrescriptionCardApi } from "../../../../Features/UploadPrescription/addPrescriptionCard";

const UploadPrescription = () => {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/searchMedicinesByName?name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data);
      });
  }, [search]);

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearch(searchItem);
  };

  const handleAddToCart = (medicine) => {
    const { _id, medicine_name, image, price, discount, category } = medicine;
    const singleCardData = { email: params.email, medicine_Id: _id, medicine_name, image, price, discount, category: category.value, quantity: 1 };
    setCart([...cart, singleCardData]);
  };

  const handleRemoveToCart = (id) => {
    const restMedicines = cart.filter((sm) => sm.medicine_Id !== id);
    setCart(restMedicines);
  };

  const handleUploadToDB = (e) => {
    e.preventDefault();
    dispatch(addPrescriptionCardApi(cart)).then(() => {
      setCart([]);
      toast.success("Added to cart");
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="pb-10">
      <div className="stats shadow">
        <div className="stat space-y-2">
          <div className=" stat-value text-2xl">Uploaded Prescription</div>
          <div className="stat-title">{params.email}</div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 gap-3  p-1 mt-6">
        {/* search div  */}
        <div className="relative border border-gray-3  bg-white rounded-2xl p-2 h-[80vh]">
          <form className="">
            <input
              onChange={handleSearch}
              className="w-full  bg-primary  absolute z-20 -top-px left-0 outline-none bg-opacity-10 px-4 rounded-full p-2 placeholder:text-gray-5 "
              type="search"
              placeholder="Search Medicines"
              name="searchMedicines"
              id=""
            />
          </form>

          <div className={`pt-10 h-[75vh] overflow-y-scroll ${search ? "block" : "hidden"}`}>
            {medicines.length === 0 && <p className="text-black-2 text-center font-semibold">Sorry, we could not find what you are looking for. Please search by right name</p>}

            {medicines.map((m) => (
              <div key={m._id} className="flex px-4 py-2 md:px-5 md:gap-20 items-center  space-x-3 text-gray-6 bg-white rounded-2xl border border-gray-3 my-2">
                <div role="button" tabIndex="0" onClick={() => handleAddToCart(m)} className="relative">
                  {m.discount > 0 && (
                    <div className="bg-my-accent z-10 rounded-md p-1 text-xs font-medium text-white absolute -top-2 -left-2 flex">
                      <p>{m.discount}</p>
                      <p>% OFF</p>
                    </div>
                  )}
                  <img className="w-20 h-20" src={m.image} alt="medicine" />
                </div>

                <div role="button" tabIndex="0" onClick={() => handleAddToCart(m)} type="button">
                  <div className="p-2 space-y-1 relative ">
                    <div className="space-y-1">
                      <p className="text-gray-5 text-xs font-medium">{m.category.label}, personal care</p>
                      <h2 className="text-[1.125rem] font-semibold text-title-color tracking-wide inline-block">{m.medicine_name}</h2>
                    </div>
                    <p className="inline-flex gap-1">
                      <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">
                        ৳ {m.discount > 0 ? (m.price - (m.price / 100) * m.discount).toFixed(2) : m.price.toFixed(2)}
                      </span>
                      {m.discount > 0 && <span className="font-medium inline-flex items-center text-[16px] text-gray-5 line-through">৳ {m.price}</span>}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-3 items-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* all div  */}
        <div className="border border-gray-3 bg-white rounded-2xl p-2">
          <div className={`p-2 relative h-[75vh] overflow-y-scroll ${search ? "block" : "hidden"}`}>
            {cart.map((m) => (
              <div key={m.medicine_Id} className="px-1 gap-10  md:flex items-center justify-around space-x-3 text-gray-6 rounded-2xl border border-gray-3 my-2">
                <div className="flex items-center gap-6">
                  <button onClick={() => handleRemoveToCart(m.medicine_Id)} type="button" className="bg-lite rounded-full py-1 px-3">
                    <span className="text-red-500">X</span>
                  </button>
                  <div className="relative bg-primary">
                    <img className="w-20 h-20" src={m.image} alt="medicine" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="p-2 space-y-1 relative ">
                    <div className="space-y-1">
                      <h2 className="text-[1.125rem] font-semibold text-title-color tracking-wide inline-block">{m.medicine_name}</h2>
                    </div>
                    <p className="inline-flex gap-1">
                      <span className="font-bold text-my-pink inline-flex items-center text-[1.125rem]">
                        ৳ {m.discount > 0 ? (m.price - (m.price / 100) * m.discount).toFixed(2) : m.price.toFixed(2)}
                      </span>
                      {m.discount > 0 && <span className="font-medium inline-flex items-center text-[16px] text-gray-5 line-through">৳ {m.price}</span>}
                    </p>
                  </div>
                </div>
                <div className="border border-gray-3 rounded-full w-fit py-3 px-5 space-x-5 flex">
                  <button type="button" className="cursor-pointer">
                    <HiMinus />
                  </button>
                  <span className="text-gray-5">{m.quantity}</span>
                  <button type="button" className="cursor-pointer">
                    <HiPlus />
                  </button>
                </div>
              </div>
            ))}
            <form className="xl:absolute flex flex-col xl:flex-row gap-4 z-10 bottom-0 left-0" onSubmit={handleUploadToDB}>
              <button className="w-full btn my-btn p-2 bg-my-accent bg-opacity-50" type="submit" name="searchMedicines" id="">
                Upload
              </button>
              <button type="button" className="btn w-full btn-error" onClick={handleClearCart}>
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
