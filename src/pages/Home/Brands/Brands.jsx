import brand4 from "../../../assets/brands/Home10_brand1-1.svg";
import brand3 from "../../../assets/brands/Home10_brand2.svg";
import brand5 from "../../../assets/brands/Home10_brand3.svg";
import brand6 from "../../../assets/brands/Home10_brand4.svg";
import brand7 from "../../../assets/brands/Home10_brand5.svg";
import brand8 from "../../../assets/brands/Home10_brand6.svg";
import brand2 from "../../../assets/brands/drugstore.svg";
import brand1 from "../../../assets/brands/hospital_1.svg";
import SectionTitle from "../../../components/SectionTitle";

const Brands = () => {
  return (
    <section className="bg-lite">
      <div className="my-container">
        <SectionTitle title="Featured Brands" content="We proudly present a handpicked collection of reputable names in the health and wellness industry." />
        <div data-testid="brands-container" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="brandsCard rounded-md bg-white  py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand1} alt="brand" />
          </div>
          <div className="brandsCard rounded-md bg-white py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand2} alt="brand" />
          </div>
          <div className="brandsCard rounded-md bg-white py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand3} alt="brand" />
          </div>
          <div className="brandsCard rounded-md bg-white py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand4} alt="brand" />
          </div>
          <div className="brandsCard rounded-md bg-white py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand5} alt="brand" />
          </div>
          <div className="brandsCard rounded-md bg-white py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand6} alt="brand" />
          </div>
          <div className="brandsCard rounded-md bg-white py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand7} alt="brand" />
          </div>
          <div className="brandsCard rounded-md bg-white py-3 flex items-center justify-center">
            <img className="w-32 py-4 object-cover" src={brand8} alt="brand" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
