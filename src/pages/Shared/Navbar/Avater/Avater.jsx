import AvaterImg from "../../../../assets/images/placeholder.jpg";

const Avater = () => {
  return (
    <div className=" cursor-pointer">
      <img src={AvaterImg} alt="" className=" rounded-full w-12 border-2 border-blue-500" />
    </div>
  );
};

export default Avater;
