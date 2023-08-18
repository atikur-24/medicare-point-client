import LabBanner from "./LabBanner";
import LabOrder from "./LabOrder";

const LabPayment = () => {
  return (
    <div>
      <LabBanner />
      <div className="my-container">
        <div className="bg-lite p-4 md:p-14 rounded-lg flex flex-col md:flex-row justify-center ">
          <div className=" md:w-1/2">
            <div className="space-y-4">
              <p className="font-semibold">PATHOLOGY TESTS (1)</p>
              <p className="text-lg font-bold">Tata 1mg Labs (Tata 1mg Technologies Private Limited )</p>
            </div>
            <form className="mt-6" action="">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Town / City *</span>
                  </label>
                  <input type="text" placeholder="Dhaka" className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Lab Name</span>
                  </label>
                  <select className="select select-ghost w-full max-w-md border input input-bordered ">
                    <option disabled selected>
                      Pick the Your Comfortable
                    </option>
                    <option>Popular Diagnostic Centre Ltd</option>
                    <option>Comfort Diagnostic Centre Pvt</option>
                    <option>Padma Diagnostic Center</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text md:text-base font-semibold text-my-primary">Mobile*</span>
                  </label>
                  <input type="text" placeholder="Mobile Number" className="input input-bordered w-full max-w-md" />
                </div>
              </div>
              <div className="form-control mt-6">
                <h2 className="text-2xl font-bold">Additional information</h2>
                <p className="text-gray-5 mt-2 font-semibold">notes (optional)</p>
                <textarea placeholder="Spacial note" className="textarea textarea-bordered textarea-lg w-full max-w-md" />
              </div>
            </form>
          </div>
          {/* payment  */}
          <LabOrder />
        </div>
      </div>
    </div>
  );
};

export default LabPayment;
