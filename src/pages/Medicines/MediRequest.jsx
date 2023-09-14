import { FaCapsules } from "react-icons/fa";

const MediRequest = () => {
  return (
    <button type="button" className="my-btn-outline !rounded-md tracking-wide" title="Request Medicine" onClick={() => document.getElementById("my_modal_mediRequest").showModal()}>
      <FaCapsules className="text-xl" /> Request Medicine
    </button>
  );
};

export default MediRequest;
