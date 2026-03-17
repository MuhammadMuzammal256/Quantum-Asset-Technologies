import bg1 from "../assets/bg1.svg";
import flash from "../assets/flash.svg";
import safty from "../assets/safty.svg";
import rea from "../assets/rea.svg";

function AboutQuantumAsset() {
  return (
    <div className="relative">
      <img
        src={bg1}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* content main part */}
      <div className="relative z-20 pt-[74px] pb-[94px] md:px-20  px-[28px]  w-full">
        <div className="max-w-full mx-auto text-center">
          <span className="border border-[#693B93] bg-white text-[#693B93] px-4 py-2 rounded-[20px] font-bold text-[12px] leading-[100%]">
            About Quantum Asset Technologies
          </span>

          <h1 className=" font-bold text-[26px] sm:text-[48px] leading-[100%] tracking-[0] mt-6 sm:mt-5">
            Pioneering the{" "}
            <span className="font-octarine font-bold text-[26px] sm:text-[48px] leading-[100%] tracking-[0] text-[#693B93]">
              Quantum Revolution
            </span>
          </h1>

          <p className="font-Octarine font-light text-[12px] sm:text-[18px] sm:leading-[25px] leading-[19px] tracking-[0] text-center text-[#0F0F0F] mt-4 max-w-[802px] mx-auto">
            We're at the forefront of financial technology, combining quantum
            computing breakthroughs with sophisticated financial modeling to
            deliver unparalleled insights, performance, and competitive
            advantage.
          </p>

          <div className="grid lg:grid-cols-3 gap-6  lg:gap-[16px] text-left lg:justify-between   h-auto  mt-[50px] sm:mt-[38px]">
            <div className="bg-white px-[35px] py-[45px] rounded-xl shadow-lg ">
              <img
                className="md:w-[44px] w-[36px] mb-[15px]"
                src={flash}
                alt="flash"
              />
              <h3 className="font-bold text-[20px]">
                Lightning Fast Processing
              </h3>
              <p className="font-light sm:text-[18px] text-[13px]  leading-[19px] sm:leading-6.25 text-black mt-2">
                Process complex financial calculations in milliseconds, not
                hours. Our quantum algorithms deliver results at unprecedented
                speed.
              </p>
            </div>

            <div className="bg-white px-[35px] py-[45px] rounded-xl shadow-lg ">
              <img
                className="md:w-[44px] w-[36px] mb-[15px]"
                src={rea}
                alt="flash"
              />
              <h3 className="font-bold text-[20px]">Quantum Advantage</h3>
              <p className="font-light sm:text-[18px] text-[13px]  leading-[19px] sm:leading-6.25 text-black mt-2">
                Leverage quantum algorithms for superior portfolio optimization,
                risk assessment, and market analysis that's impossible with
                classical computing.
              </p>
            </div>

            <div className="bg-white px-[35px] py-[45px] rounded-xl shadow-lg ">
              <img
                className="md:w-[44px] w-[36px] mb-[15px]"
                src={safty}
                alt="flash"
              />
              <h3 className="font-bold text-[20px]">Enterprise Security</h3>
              <p className="font-light sm:text-[18px] text-[13px]  leading-[19px] sm:leading-6.25 text-black mt-2">
                Military-grade quantum encryption and security protocols protect
                your most sensitive financial data and trading strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutQuantumAsset;
