const SectionTitle = ({ title, content }) => {
    return (
      <div className="flex  justify-center flex-col items-center mb-6 md:mb-8 lg:mb-12 space-y-2 lg:space-y-3">
        <h2 className="text-2xl md:text-[40px] uppercase font-bold tracking-wide title-color">{title}</h2>
        <p className="md:w-1/2   txt-gray text-justify lg:text-center lg:mx-32 lg:text-[16px]">{content}</p>
      </div>
    );
};

export default SectionTitle;
