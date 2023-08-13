const SectionTitle = ({ title, content }) => {
    return (
      <div className="text-center mb-6 md:mb-8 lg:mb-12 space-y-2 lg:space-y-3">
        <h2 className="text-4xl md:text-[40px] capitalize font-bold tracking-wide title-color">{title}</h2>
        <p className="txt-gray text-justify lg:text-center lg:mx-32 lg:text-[16px]">{content}</p>
      </div>
    );
};

export default SectionTitle;
