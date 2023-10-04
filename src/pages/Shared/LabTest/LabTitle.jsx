const LabTitle = ({ title }) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between ">
        <div className="space-y-2">
          <h2 className="text-xl font-bold uppercase  text-[#111a28]  lg:text-2xl">
            {title}
          </h2>
          <hr className="w-40 border-2 border-[#10847e]" />
        </div>
      </div>
    </div>
  );
};

export default LabTitle;
