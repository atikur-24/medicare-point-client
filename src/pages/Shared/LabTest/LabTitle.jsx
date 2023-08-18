const LabTitle = ({ title }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center ">
        <div className="space-y-2">
          <h2 className="text-xl uppercase lg:text-2xl  font-bold  text-[#111a28]">{title}</h2>
          <hr className="border-2 border-[#10847e] w-40" />
        </div>
      </div>
    </div>
  );
};

export default LabTitle;
