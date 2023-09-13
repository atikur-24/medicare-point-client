import { FaCapsules } from "react-icons/fa";

const MediRequest = () => {
  return (
    <div className="bg-my-primary py-6">
      <div className="flex items-center justify-center gap-6">
        <button type="button" className="my-btn-outline tracking-wide" onClick={() => document.getElementById("my_modal_mediRequest").showModal()}>
          <FaCapsules className="text-xl" /> Request Medicine
        </button>
      </div>
    </div>
  );
};

export default MediRequest;
