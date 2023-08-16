import { TiEdit } from "react-icons/ti";

const AllMedicines = () => {
  return (
    <div className="mx-1 md:mx-5">
      <h3 className="text-center text-3xl my-7 font-semibold">
        All Available Medicines
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex space-x-3 text-gray-6 bg-slate-1">
          <img
            className="w-48 h-full"
            src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
            alt=""
          />
          <div className="p-2 space-y-1 relative">
            <h4 className="uppercase text-lg font-semibold">
              NAPA EXTEND 665 Tab
            </h4>
            <p>Generic: PARACETAMOL BP</p>
            <p className="text-sm">Supplier: BEXIMCO PHARMACEUTICALS LTD</p>
            <div className="flex justify-between">
              <p>Price: 6.50 TK.</p>
              <button
                type="button"
                className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
              >
                <TiEdit className="text-lg" />
              </button>
            </div>
            {/* <span className="absolute top-1 right-0">i</span> */}
          </div>
        </div>
        <div className="flex space-x-3 text-gray-6 bg-slate-1">
          <img
            className="w-48 h-full"
            src="https://images.newscientist.com/wp-content/uploads/2019/11/27120939/d7mw20.jpg?width=800"
            alt=""
          />
          <div className="p-2 space-y-1 relative">
            <h4 className="uppercase text-lg font-semibold">
              NAPA EXTEND 665 Tab
            </h4>
            <p>Generic: PARACETAMOL BP</p>
            <p className="text-sm">Supplier: BEXIMCO PHARMACEUTICALS LTD</p>
            <div className="flex justify-between">
              <p>Price: 6.50 TK.</p>
              <button
                type="button"
                className="btn btn-circle btn-sm bg-my-primary text-white hover:bg-my-accent"
              >
                <TiEdit className="text-lg" />
              </button>
            </div>
            {/* <span className="absolute top-1 right-0">i</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMedicines;
