const LabButton = ({ labAddCart }) => {
  const handlerLab = () => {
    console.log(labAddCart);
  };
  return (
    <div className="">
      <button onClick={handlerLab} type="button" className="btn cart-btn w-full">
        Add To Cart
      </button>
    </div>
  );
};

export default LabButton;
