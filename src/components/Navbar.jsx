import { useState } from "react";
import Logo from "../assets/LogoQ1.svg";
import germany from "../assets/germany-flag.svg";
import dropDown from "../assets/direction-down.svg";
import hamBug from "../assets/hambug.svg";
import cross from "../assets/cross.svg";

import USA from "../assets/united-states-flg.svg";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sel, setSel] = useState(false);
  const [lang, setLang] = useState({
    name: "Germany",
    flag: germany,
  });

  return (
    <nav className="bg-white lg:shadow-lg h-15 md:h-19.5 flex items-center md:px-20  px-[28px]  relative sticky top-0 z-200">
      <div className="flex items-center justify-between w-full">
        <div>
          <img
            src={Logo}
            alt="Quantum Logo"
            className="h-[28px] md:w-[180px] md:h-[42px] lg:w-[202px] lg:h-[48px]"
          />
        </div>

        <div className="hidden lg:block ">
          <ul className="flex gap-3 md:gap-5 lg:gap-7 text-[12px] md:text-[14px] lg:text-[16px] font-light cursor-pointer">
            <li className="text-[#0F0F0F] transition-all duration-200 hover:text-[#693B93] hover:font-[700]">
              Home
            </li>
            <li className="text-[#0F0F0F] transition-all duration-200 hover:text-[#693B93] hover:font-[700]">
              About
            </li>
            <li className="text-[#0F0F0F] transition-all duration-200 hover:text-[#693B93] hover:font-[700]">
              Services
            </li>
            <li className="text-[#0F0F0F] transition-all duration-200 hover:text-[#693B93] hover:font-[700]">
              Technology
            </li>
            <li className="text-[#0F0F0F] transition-all duration-200 hover:text-[#693B93] hover:font-[700]">
              FAQs
            </li>
          </ul>
        </div>

        <div className="flex gap-3 md:gap-5 hidden lg:flex">
          <button className="w-[135px] md:w-[115px] lg:w-[125px] h-[44px] md:h-[40px] lg:h-[42px] rounded-[8px] bg-[#693B93] text-white font-bold text-[14px] flex items-center justify-center">
            Contact US
          </button>

          <button
            onClick={() => setSel(!sel)}
            className="flex items-center w-[135px] md:w-[115px] lg:w-[125px] h-[44px] md:h-[40px] lg:h-[42px] justify-evenly rounded-[8px] border border-[#693B93] bg-[#F9F3FF] text-[#0F0F0F] font-visby font-semibold text-[14px]"
          >
            <img
              className="w-[18px] md:w-[16px] lg:w-[18px] h-[18px] md:h-[16px] lg:h-[18px]"
              src={lang.flag}
              alt="Germany"
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

          {sel && (
            <div className="flex flex-col mt-3 absolute z-50 border border-[#693B93] lg:right-20 lg:top-13 items-center lg:w-[124px] py-[14px] pl-[10px] pr-[25px] rounded-[8px] bg-[#F9F3FF] text-[#0F0F0F] font-visby font-semibold text-[14px]">
              <button
                onClick={() => {
                  setLang({ name: "English", flag: USA });
                  setSel(false);
                }}
                className="flex items-center w-full"
              >
                <img className="mr-1.5" src={USA} alt="Germany" />
                <span className="text-[14px] font-bold">English</span>
              </button>

              <hr className="w-full border-[#E7E7E7] my-3" />

              <button
                onClick={() => {
                  setLang({ name: "Germany", flag: germany });
                  setSel(false);
                }}
                className="flex items-center w-full"
              >
                <img className="mr-1.5" src={germany} alt="Germany" />
                <span className="text-[14px] font-bold">Germany</span>
              </button>
            </div>
          )}
        </div>

        <div className="block lg:hidden">
          <img
            src={menuOpen ? cross : hamBug}
            alt="Menu"
            className="cursor-pointer w-[22px]"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full z-100 bg-white shadow-md flex flex-col items-start lg:hidden p-4 px-[32px] md:px-20 gap-3 z-50">
          <ul className="flex flex-col gap-3 text-[14px] font-light cursor-pointer w-full">
            <li className="text-[#0F0F0F] hover:text-[#693B93] hover:font-[700] w-full border-b border-gray-200 pb-2">
              Home
            </li>
            <li className="text-[#0F0F0F] hover:text-[#693B93] hover:font-[700] w-full border-b border-gray-200 pb-2">
              About
            </li>
            <li className="text-[#0F0F0F] hover:text-[#693B93] hover:font-[700] w-full border-b border-gray-200 pb-2">
              Services
            </li>
            <li className="text-[#0F0F0F] hover:text-[#693B93] hover:font-[700] w-full border-b border-gray-200 pb-2">
              Technology
            </li>
            <li className="text-[#0F0F0F] hover:text-[#693B93] hover:font-[700] w-full border-b border-gray-200 pb-2">
              FAQs
            </li>
          </ul>

          <div className="flex flex-col gap-3 w-full mt-2">
            <button className="w-full h-[44px] rounded-[8px] bg-[#693B93] text-white font-bold text-[14px]">
              Contact US
            </button>
            <button
              onClick={() => setSel(!sel)}
              className="flex items-center w-full h-[44px] justify-between rounded-[8px] border border-[#693B93] bg-[#F9F3FF] text-[#0F0F0F] font-visby font-semibold text-[14px] px-4"
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-[20px] h-[20px]"
              />
              <span>{lang.name}</span>
              <img
                src={dropDown}
                alt="dropdown"
                className="w-[20px] h-[20px]"
              />
            </button>
            {sel && (
              <div className="absolute top-full mt-2 left-[28px] right-[28px]   md:left-20 md:right-20  lg:right-20 lg:w-[124px] bg-[#F9F3FF] border border-[#693B93] rounded-[8px] z-50 flex flex-col">
                <button
                  onClick={() => {
                    setLang({ name: "English", flag: USA });
                    setSel(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  <img
                    src={USA}
                    alt="English"
                    className="w-[20px] h-[20px] mr-2"
                  />
                  English
                </button>

                <button
                  onClick={() => {
                    setLang({ name: "Germany", flag: germany });
                    setSel(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  <img
                    src={germany}
                    alt="Germany"
                    className="w-[20px] h-[20px] mr-2"
                  />
                  Germany
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
