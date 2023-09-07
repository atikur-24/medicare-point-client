const LabFaqs = () => {
  return (
    <div className="my-container">
      <h1 className="text-xl text-center uppercase lg:text-2xl  font-bold  text-[#111a28] mb-16">FAQs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="collapse collapse-plus bg-gray-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-semibold">What are online Lab Tests and how can I book them?</div>
          <div className="collapse-content bg-slate-3">
            <p className="py-4">
              Online Lab Tests are similar to physical laboratory tests except that they are booked online instead of making an in-person appointment. Moreover, with online lab tests you can get the
              facility of home sample collection from medical labs near you. Various certified and professional medical labs, such as Chughtai Lab and Essa Laboratory, are available on our
              platform-MediCare, for you to book your home lab test conveniently.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-semibold">What are the advantages of booking online lab tests?</div>
          <div className="collapse-content bg-slate-3">
            <p className="py-4">
              Online lab test booking on MediCare allows you to easily book various lab tests from the comfort of your home. For several tests, the option of booking a certified medical professional
              for home sampling is available. The trained medical professional can come to your house and assist you with collecting the sample. However, some tests may require you to go to the
              testing laboratory.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-semibold">What will I be charged for the online Lab test?</div>
          <div className="collapse-content bg-slate-3">
            <p className="py-4">
              The price rates for various lab tests vary by test type and laboratory. You can compare the prices between our lab partners, Chughtai and Essa, for the listed tests and choose whichever
              suits your needs. Moreover, at MediCare we give exclusive discounts on the lab test prices so that our customers get the best lab services at the most reasonable rates.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-semibold">How many types of Lab Tests are there?</div>
          <div className="collapse-content bg-slate-3">
            <div className="py-4 space-y-2">
              <p>There are several types of Lab tests, based on illness and organ. Some common test types include:</p>
              <ul className="list-disc px-6">
                <li>CBC blood test</li>
                <li>Lipid profile tests</li>
                <li>Thyroid function tests</li>
                <li>Covid-19 anti-body test</li>
                <li>Covid-19 PCR test</li>
                <li>Diabetes tests</li>
                <li>Heart health tests</li>
                <li>Kidney function tests</li>
                <li>Sexually transmitted diseases tests</li>
                <li>Liver function tests</li>
                <li>Blood protein tests</li>
              </ul>
              MediCare offers several lab tests through our approved lab partners. The type of test you need to book and undergo is mostly dependent on your condition and the physician’s prescription.
            </div>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-semibold">How will I get my test reports?</div>
          <div className="collapse-content bg-slate-3">
            <p className="py-4">
              Lab tests are performed by our lab partners and reports will be provided to you by the lab you have booked your test with. So, if you have booked a test with Chughtai Lab from our
              platform, you will be able to access the lab report online on Chughtai Lab website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Are online lab test reports reliable?</div>
          <div className="collapse-content bg-slate-3">
            <p className="py-4">
              At MediCare, certified and professional medical labs, including Chughtai Lab and Essa Laboratory, are available to book your tests with. The collection of the patient’s relevant details,
              test procedure, and the results are just as reliable and correct as those done and booked at the lab entirely. The test results can be used for diagnosing your condition and initiating
              effective treatment.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">How do I know if my Lab Test reports are normal or abnormal?</div>
          <div className="collapse-content bg-slate-3">
            <p className="py-4">
              A medical professional assesses and determines the results of your lab test. The normality or abnormality of the medical lab test reports is significantly dependent on the values
              obtained from your sample. However, for your comfort, the normal reference values for most lab tests are mentioned with the obtained result values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabFaqs;
