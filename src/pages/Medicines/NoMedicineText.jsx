import openBox from "../../assets/images/box.webp";

const NoMedicineText = () => {
  return (
    <div className=" mt-10 lg:mt-20">
      <img className="mx-auto w-28" src={openBox} alt="" />
      <p className="mt-2 text-center text-xl font-medium capitalize text-gray-5">
        Sorry, no available Product of this quantity
      </p>
    </div>
  );
};

export default NoMedicineText;
