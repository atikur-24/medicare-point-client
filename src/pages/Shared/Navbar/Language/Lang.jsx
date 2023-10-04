/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

const Lang = () => {
  const [donwOpen, setDownOpen] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setDownOpen(!donwOpen)}
        className=" btn btn-sm flex h-10 w-32 items-center gap-2 border-none"
      >
        <p> {language}</p>{" "}
        {donwOpen ? (
          <LiaAngleDownSolid className="text-lg" />
        ) : (
          <LiaAngleUpSolid className="text-lg" />
        )}
      </button>

      {!donwOpen && (
        <div className="absolute z-10 mt-1 w-32 space-y-2 rounded-md bg-white py-4 text-center drop-shadow-2xl">
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
