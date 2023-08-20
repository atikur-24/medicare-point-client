import { FaAngleDown } from "react-icons/fa";

const LabDetails = ({ open, toggleOpen }) => {
  return (
    <div className={`${open ? "hidden" : "block right-0"} z-50 fixed  bg-card border-2 border-my-primary rounded-l-lg h-full md:w-96 w-full overflow-scroll  `}>
      <div className="fixed  rounded-l-lg w-full p-2 bg-lite border border-gray-3">
        <div className="flex gap-6">
          <p className="text-lg text-title-color font-medium">1 Item added to your cart</p>
          <button onClick={toggleOpen} type="button" className=" capitalize text-my-primary font-bold inline-flex items-center">
            Show Less
            <span>
              <FaAngleDown className="w-6 h-6" />
            </span>
          </button>
        </div>
      </div>
      <div className="p-4 my-10 h-full">
        <p className="">
          Ruling Bangladesh Awami League general secretary Obaidul Quader fails to understand the reason of powerful countries’ “headache” over the upcoming parliament election in Bangladesh. “About
          20-22 countries are going into election this year. But no one is saying anything anywhere about their election or internal affairs. The presidential candidate in Ecuador has been killed. But
          bigger and powerful countries are not talking about this. I do not understand what the reason of their headache is over our country,” said the AL leader. Quader, also road transport and
          bridges minister, was speaking to media at his secretariat office on Sunday. The media conference was organised to announce the inauguration of some development projects. Obaidul Quader was
          asked whether Bangladesh would become a issue of contention of the US and India over the upcoming parliament election, especially because apparently it seems from local and international
          media reports and speeches of the leaders of ruling and opposition parties that India has taken side of Awami League and US is in favour of BNP. Responding to this question, the AL general
          secretary said, “The election of Bangladesh is an internal matter of Bangladesh. Various countries have geopolitical strategies surrounding this region. The US has stakes in that, so has
          India. And this is normal. There is China on the other side, a big power.” Obaidul Quader further said, “India yesterday (Saturday) informed the US about its interests. They never told us
          introduce caretaker in election … electoral system … America also never said so.” Mentioning that BNP demanded caretaker government, resignation of the prime minister, and dissolution of
          parliament, the AL general secretary said, “I have personally asked; America, European Union no one said the caretaker government is necessary, the prime minister will have to resign. They
          do not have this system anywhere. Why would it be introduced in Bangladesh?” Speaking about the activities of the foreigners, Obaidul Quader said, “Let them say what they like, we will act
          in our way. We have pledges to our people, we shall organise a fair election, a free election. We shall conduct a peaceful election, this is our internal affair.” Mentioning about military
          coup in Niger, Obaidul Quader came up with snide remarks indicating the Western countries. “We shall see what do they do in Niger? They cannot act where it is actually required. The military
          junta there clearly said there would be no talk of election in the next three years. It has to be seen, what they do there.” Asked, Obaidul Quader also said, “The time is challenging. But no
          challenge in politics, state affairs, and personal life is unsurmountable.”
        </p>
      </div>
    </div>
  );
};

export default LabDetails;
