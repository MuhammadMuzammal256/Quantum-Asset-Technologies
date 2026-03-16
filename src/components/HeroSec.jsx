import rectangle from "../assets/rectangle.svg";
import stringss from "../assets/stringss.svg";
import dots from "../assets/dots.svg";

function HeroSec() {
  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row md:justify-between items-center mt-[0px] lg:mt-[72px] lg:mb-[103px] mb-[71px] md:px-20 px-[28px] w-full">
      <div className="text-center lg:text-left md:text-left flex flex-col lg:gap-6 md:gap-6 gap-3 max-w-[450px]">
        <h1 className="font-bold text-[26px] mt-[50px] sm-mt[0px]  md:text-3xl lg:text-6xl md:leading-10 lg:leading-[68px] text-gray-900">
          The Future of
          <br />
          <span className="text-[#693B93]">Financial Intelligence</span>
        </h1>

        <p className="font-light lg:text-[18px] md:text-[14px] text-[13px] text-black">
          Harness the revolutionary power of quantum computing to transform
          portfolio optimization, risk analysis, and financial modeling.
          Experience unprecedented speed, accuracy, and insights in your
          investment decisions.
        </p>

        <div className="flex gap-4 lg:justify-start md:justify-start justify-center">
          <button className="font-bold lg:text-[14px] md:text-[12px] text-[11px] lg:w-[166px] md:w-[150px] w-[132px] h-[44px] rounded-lg text-white bg-[#693B93] cursor-pointer">
            Explore Solutions
          </button>

          <button className="lg:w-[166px] md:w-[150px] w-[132px] h-[44px] rounded-lg border border-black font-bold lg:text-[14px] md:text-[12px] text-[11px] text-black cursor-pointer">
            Schedule Demo
          </button>
        </div>
      </div>

      <div className="relative lg:w-[536px] md:w-[420px] w-[324px] lg:h-[371px] md:h-[320px] h-[224px]">
        <img
          src={rectangle}
          alt="rectangle"
          className="absolute right-0 bottom-0 sm:right-0  sm:bottom-0  md:right-0 md:bottom-0  lg:w-[371px] md:w-[300px] w-[224px] z-50"
        />

        <img
          src={stringss}
          alt="strings"
          className="absolute top-5 left-6 lg:left-3 lg:top-10 sm:top-5 md:top-20 md:right-0 md:left-0   lg:w-[111px] md:w-[90px] w-[65px]"
        />

        <img
          src={dots}
          alt="dots"
          className="absolute left-11  bottom-0 md:left-12.5 md:bottom-3 lg:w-[120px] md:w-[90px] w-[72px]"
        />

        <div
          className="absolute top-4 left-22  md:top-18 md:left-20 lg:top-10 lg:left-28 
  bg-white gap-1 rounded-[20px] w-[113px ]  md:w-36 lg:w-[180px] 
    h-[61px]  md:h-16 lg:h-[87px] z-51  px-[18px]
    flex flex-col justify-between p-2  md:p-4 lg:p-[18px] shadow-md"
        >
          <h3 className="font-bold text-[10px] lg:text-[12px] leading-[100%] text-[#0F0F0F]">
            Quantum Processing
          </h3>

          <p className="font-bold lg-text-[24px]   text-[16px] leading-[100%] text-[#693B93]">
            99.9%
          </p>

          <p className="font-light text-[10px] leading-[100%] text-[#0F0F0F80]">
            Accuracy Rate
          </p>
        </div>

        <div
          className="absolute top-22 left-6  md:top-43 md:left-0 lg:top-40 lg:left-0 
    bg-white gap-1 rounded-[20px] w-[113px ] md:w-36 lg:w-[180px] 
    h-[61px]  md:h-16 lg:h-[87px] z-51  px-[18px]
    flex flex-col justify-between p-2 md:p-4 lg:p-[18px] shadow-md"
        >
          <h3 className="font-bold text-[10px] lg:text-[12px] leading-[100%] text-[#0F0F0F]">
            Security
          </h3>

          <p className="font-bold text-[16px] lg:text-[24px] leading-[100%] text-[#693B93]">
            Bank-Grade
          </p>

          <p className="font-light text-[10px] leading-[100%] text-[#0F0F0F80]">
            Encryption
          </p>
        </div>

        <div
          className="absolute top-20.5 left-42  md:top-40 md:left-44 lg:top-34.5 lg:left-60 
  bg-white gap-1 rounded-[20px] w-[113px ]  md:w-36 lg:w-[180px] 
    h-[61px]  md:h-16 lg:h-[87px] z-51  px-[18px]
    flex flex-col justify-between p-2  md:p-4 lg:p-[18px] shadow-md"
        >
          <h3 className="font-bold text-[10px] lg:text-[12px] leading-[100%] text-[#0F0F0F]">
            Performance
          </h3>

          <p className="font-bold text-[16px] lg:text-[24px] leading-[100%] text-[#693B93]">
            1000x
          </p>

          <p className="font-light text-[10px] leading-[100%] text-[#0F0F0F80]">
            Faster Analysis
          </p>
        </div>

        <div
          className="absolute top-37.5 left-30 sm:left-32 sm:left-24 md:top-60 md:left-36 lg:top-66 lg:left-48 
    bg-white gap-1 rounded-[20px] w-[113px ]  md:w-36 lg:w-[180px] 
    h-[61px]  md:h-16 lg:h-[87px] z-51  px-[18px]
    flex flex-col justify-between p-2  md:p-4 lg:p-[18px] shadow-md"
        >
          <h3 className="font-bold text-[10px] lg:text-[12px] leading-[100%] text-[#0F0F0F]">
            ROI Increase
          </h3>

          <p className="font-bold text-[16px lg:text-[24px]] leading-[100%] text-[#693B93]">
            +47%
          </p>

          <p className="font-light text-[10px] leading-[100%] text-[#0F0F0F80]">
            Average Boost
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
