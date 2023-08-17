import { NavLink } from "react-router-dom";

const NewOrders = () => {
  return (
    <div className="px-5">
      <h3 className="text-center text-3xl my-7 font-semibold">New orders</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-10">
        <div className="flex space-x-3 text-gray-6 bg-card shadow-lg">
          <img
            className="w-48 h-full"
            src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
            alt=""
          />
          <div className="p-2 space-y-1 relative w-[60%]">
            <h4 className="uppercase text-lg font-semibold">
              NAPA EXTEND 665 Tab
            </h4>
            <p>Generic: PARACETAMOL BP</p>
            <h4>
              Buyer: <span className="font-semibold">Mamun Khan</span>
            </h4>
            <div className="md:flex justify-between space-y-1 md:space-y-0">
              <p>Price: 6.50 TK.</p>
              <p>Quantity: 6</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-primary hover:bg-my-accent w-full md:w-1/2 text-center">
                Buyer Info
              </NavLink>
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-accent hover:bg-my-primary w-full md:w-1/2 text-center">
                Fulfill Order
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-6 bg-card shadow-lg">
          <img
            className="w-48 h-full"
            src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
            alt=""
          />
          <div className="p-2 space-y-1 relative w-[60%]">
            <h4 className="uppercase text-lg font-semibold">
              NAPA EXTEND 665 Tab
            </h4>
            <p>Generic: PARACETAMOL BP</p>
            <h4>
              Buyer: <span className="font-semibold">Mamun Khan</span>
            </h4>
            <div className="md:flex justify-between space-y-1 md:space-y-0">
              <p>Price: 6.50 TK.</p>
              <p>Quantity: 6</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-primary hover:bg-my-accent w-full md:w-1/2 text-center">
                Buyer Info
              </NavLink>
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-accent hover:bg-my-primary w-full md:w-1/2 text-center">
                Fulfill Order
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-6 bg-card shadow-lg">
          <img
            className="w-48 h-full"
            src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
            alt=""
          />
          <div className="p-2 space-y-1 relative w-[60%]">
            <h4 className="uppercase text-lg font-semibold">
              NAPA EXTEND 665 Tab
            </h4>
            <p>Generic: PARACETAMOL BP</p>
            <h4>
              Buyer: <span className="font-semibold">Mamun Khan</span>
            </h4>
            <div className="md:flex justify-between space-y-1 md:space-y-0">
              <p>Price: 6.50 TK.</p>
              <p>Quantity: 6</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-primary hover:bg-my-accent w-full md:w-1/2 text-center">
                Buyer Info
              </NavLink>
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-accent hover:bg-my-primary w-full md:w-1/2 text-center">
                Fulfill Order
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-6 bg-card shadow-lg">
          <img
            className="w-48 h-full"
            src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
            alt=""
          />
          <div className="p-2 space-y-1 relative w-[60%]">
            <h4 className="uppercase text-lg font-semibold">
              NAPA EXTEND 665 Tab
            </h4>
            <p>Generic: PARACETAMOL BP</p>
            <h4>
              Buyer: <span className="font-semibold">Mamun Khan</span>
            </h4>
            <div className="md:flex justify-between space-y-1 md:space-y-0">
              <p>Price: 6.50 TK.</p>
              <p>Quantity: 6</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-primary hover:bg-my-accent w-full md:w-1/2 text-center">
                Buyer Info
              </NavLink>
              <NavLink className="text-white text-sm px-5 py-1 rounded-3xl bg-my-accent hover:bg-my-primary w-full md:w-1/2 text-center">
                Fulfill Order
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrders;
