import Heading from "../../Shared/Heading/Heading";

const ChooseUs = () => {
  return (
    <div className="my-20 px-20">
      <Heading title="why choose us" center />
      <div className="w-[338px] h-[192px] bg-slate-300 py-8 px-8 rounded-br-[50%] relative">
        <div className="py-8">
          <h2 className="text-2xl font-bold">Name</h2>
          <p>Lorem, ipsum dolor sit amet consectetur </p>
        </div>

        <div className="w-[100px] h-[90px] bg-slate-600 py-8 px-8 rounded-br-[50%] absolute -top-10">
          <h2 className="text-white">icon</h2>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
