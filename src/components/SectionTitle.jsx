const SectionTitle = ({ title, content }) => {
  return (
    <div className="mb-6  flex flex-col items-center justify-center space-y-1 md:mb-8 lg:mb-12 lg:space-y-4 xl:space-y-2">
      <h2 className="text-xl font-bold uppercase  text-title-color lg:text-3xl lg:tracking-wide">
        {title}
      </h2>
      <p className="text-justify text-[10px] text-gray-5 md:w-2/3 lg:mx-32 lg:text-center lg:text-xs xl:text-sm">
        {content}
      </p>
    </div>
  );
};

export default SectionTitle;
