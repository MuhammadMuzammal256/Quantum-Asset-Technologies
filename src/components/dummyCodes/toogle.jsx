import { useState } from "react";
import Logo from "../assets/LogoQ1.svg";
import germany from "../assets/germany-flag.svg";
import dropDown from "../assets/direction-down.svg";
import USA from "../assets/united-states-flg.svg";

import hamBug from "../assets/hambug.svg";

function Btns() {
  const [sel, setSel] = useState(false);
const [lang, setLang] = useState({
  name: "Germany",
  flag: germany
});
  return (
    <div>
      <button onClick={() => setSel(!sel)} className="flex items-center w-[135px] md:w-[115px] lg:w-[125px] h-[44px] md:h-[40px] lg:h-[42px] justify-evenly rounded-[8px] border border-[#693B93] bg-[#F9F3FF] text-[#0F0F0F] font-visby font-semibold text-[14px]">
        <img
          className="w-[18px] md:w-[16px] lg:w-[18px] h-[18px] md:h-[16px] lg:h-[18px]"
          src={lang.flag}
          alt={lang.name}
        />

        <span className="text-[14px] md:text-[13px] lg:text-[14px]">
          {lang.name}
        </span>

        <img
          src={dropDown}
          alt="dropdown"
          className="w-[20px] md:w-[16px] lg:w-[18px] h-[20px] md:h-[16px] lg:h-[18px]"
        />
      </button>

     
    </div>
  );
}

export default Btns;
