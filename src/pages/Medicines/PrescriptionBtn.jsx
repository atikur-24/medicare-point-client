import { FaFilePrescription } from "react-icons/fa";

const PrescriptionBtn = () => {
  return (
    <button type="button" className="my-btn-outline !rounded-md tracking-wide" title="upload prescription" onClick={() => window.my_modal_PrescriptionUpload.showModal()}>
      <FaFilePrescription className="text-xl" /> Upload Prescription
    </button>
  );
};

export default PrescriptionBtn;
