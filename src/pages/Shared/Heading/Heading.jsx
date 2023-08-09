const Heading = ({ title, subtile, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className="text-4xl mb-5 font-bold text-neutral-600 hover:text-neutral-800">{title}</h2>
      <h3>{subtile}</h3>
    </div>
  );
};

export default Heading;
