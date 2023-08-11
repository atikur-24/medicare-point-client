const Heading = ({ title, subtile, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className="text-2xl uppercase lg:text-4xl mb-14 font-bold  text-[#111a28]">{title}</h2>
      <h3>{subtile}</h3>
    </div>
  );
};

export default Heading;
