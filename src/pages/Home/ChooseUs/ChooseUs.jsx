import Heading from "../../Shared/Heading/Heading";

const ChooseUs = () => {
  return (
    <div className="my-container">
      <Heading title="why choose us" center />
      <div className="grid mt-24 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* one  */}
        <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
          <div className="py-8">
            <h2 className="text-2xl font-bold">Name</h2>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>

          <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 py-8 px-8 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
            <h2 className="text-white">icon</h2>
          </div>
        </div>
        {/* two  */}
        <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
          <div className="py-8">
            <h2 className="text-2xl font-bold">Name</h2>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>

          <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 py-8 px-8 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
            <h2 className="text-white">icon</h2>
          </div>
        </div>
        {/* three  */}
        <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
          <div className="py-8">
            <h2 className="text-2xl font-bold">Name</h2>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>

          <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 py-8 px-8 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
            <h2 className="text-white">icon</h2>
          </div>
        </div>
        {/* four  */}
        <div className="w-full bg-slate-300 py-8 px-8 rounded-lg md:rounded-none md:rounded-br-[45%] relative">
          <div className="py-8">
            <h2 className="text-2xl font-bold">Name</h2>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>

          <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] bg-slate-600 py-8 px-8 rounded-br-[50%] absolute -top-5 md:-top-10 flex justify-center items-center">
            <h2 className="text-white">icon</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
