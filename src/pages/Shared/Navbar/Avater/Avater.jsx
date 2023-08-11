import AvaterImg from "../../../../assets/images/placeholder.png";

const Avater = () => {
  return (
    <div className=" cursor-pointer">
      <img src={AvaterImg} alt="" className=" rounded-full w-16  md:w-12 border-2 border-[#1083c4]" />
    </div>
  );
};

export default Avater;
