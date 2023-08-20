/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

const Lang = () => {
  const [donwOpen, setDownOpen] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="relative">
      <button type="button" onClick={() => setDownOpen(!donwOpen)} className=" flex gap-2 items-center btn btn-sm border-none w-32 h-10">
        <p> {language}</p> {donwOpen ? <LiaAngleDownSolid className="text-lg" /> : <LiaAngleUpSolid className="text-lg" />}
      </button>

      {!donwOpen && (
        <div className="bg-white z-10 text-center space-y-2 py-4 absolute w-32 mt-1 drop-shadow-2xl rounded-md">
          <div onClick={() => setDownOpen(!donwOpen)} className="w-full">
            <button type="button" onClick={() => setLanguage("English")}>
              English
            </button>
          </div>
          <hr className=" border-gray-3" />
          <div onClick={() => setDownOpen(!donwOpen)} className="w-full">
            <button type="button" onClick={() => setLanguage("Bangla")}>
              Bangla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lang;
