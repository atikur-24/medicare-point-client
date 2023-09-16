const SectionTitle = ({ title, content }) => {
  return (
    <div className="flex  justify-center flex-col items-center mb-6 md:mb-8 lg:mb-12 space-y-1 xl:space-y-2 lg:space-y-4">
      <h2 className="text-xl lg:text-3xl uppercase  font-bold lg:tracking-wide text-title-color">{title}</h2>
      <p className="md:w-2/3 text-gray-5 text-justify lg:text-center lg:mx-32 text-[10px] lg:text-xs xl:text-sm">{content}</p>
    </div>
  );
};

export default SectionTitle;
