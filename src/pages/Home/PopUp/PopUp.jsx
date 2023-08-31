const PopUp = ({ isPopUp, setPopUp }) => {
  return (
    <div className={`fixed z-50 w-full flex justify-center transition-all duration-700 ${isPopUp}`}>
      <div className=" w-11/12 lg:w-1/2 bg-slate-1 relative">
        <button
          onClick={() => setPopUp("-top-[1000px]")}
          type="button"
          className="btn btn-circle btn-sm bg-red-500 hover:bg-red-400 text-white transition-all duration-300 border-none absolute -right-3 -top-3"
        >
          x
        </button>
        <div className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa voluptatem consequuntur fuga ratione nemo eos dolores et blanditiis delectus nesciunt quas pariatur odit dicta incidunt
          earum reiciendis sunt voluptatum animi eius natus, esse eaque ex? Quos officiis non itaque, officia dolore nam iusto explicabo nostrum, porro ducimus assumenda ullam.
        </div>
      </div>
    </div>
  );
};

export default PopUp;
