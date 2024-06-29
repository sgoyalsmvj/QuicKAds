import Link from "next/link";
import Image from "next/image";
import logo1 from "@/public/images/spend.png";
import logo2 from "@/public/images/analytics.png";
import logo3 from "@/public/images/executive.png";
import logo4 from "@/public/images/strategy.png";

const ButtonComponent = ({ href, text, isDisable, logo }) => {
  return (
    <Link href={href}>
      <button
        className={`px-4 py-2 mx-12 rounded-full h-36 md: w-96 border-2 border-black transition-all duration-200 ${
          isDisable
            ? "bg-gray-200 text-gray-400 shadow-3xl cursor-default"
            : "bg-orange-200 shadow-3xl hover:shadow-3xl hover:cursor-pointer"
        } relative`}
      >
        <div
          className={`relative h-full w-full ${
            !isDisable
              ? 'before:content-[""] before:absolute before:h-44 before:w-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:opacity-100 before:bottom-0 before:right-0 before:transition-all before:duration-[1.2s] before:translate-x-full before:transform-origin-center hover:before:translate-x-0'
              : ""
          }`}
        >
          <div className="flex flex-col justify-center h-full items-center mt-2 px-2">
            <Image src={logo} alt={text} width={50} height={50} />
            <h1 className="text-[1em] font-extrabold mb-2">{text}</h1>
          </div>
        </div>
      </button>
    </Link>
  );
};

const ArrowComponent = () => {
  return (
    <div className="hidden md:flex flex-col items-center ">
      <div className="w-24 md:w-48 h-1 -rotate-[30deg] bg-black"></div>
      <div className="h-4 md:h-24"></div>
      <div className="w-24 md:w-48 h-1 rotate-[30deg] bg-black"></div>
    </div>
  );
};

const ButtonContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-5 mt-7 space-y-5 md:space-y-0 md:space-x-5">
      <ButtonComponent
        href="/summary"
        text="Executive Summary"
        isDisable={false}
        logo={logo4}
      />
      {/* <div className="w-24 md:w-48 h-1 bg-black md:flex hidden"></div>
      <ArrowComponent /> */}
      {/* <div className="flex flex-col items-center space-y-3"> */}
      <ButtonComponent
        href="/adSpend"
        text="Ad Spend & Effectiveness"
        isDisable={false}
        logo={logo1}
      />
      <ButtonComponent
        href="/swot"
        text="Competitor Video Analytics"
        logo={logo2}
        isDisable={false}
      />
      {/* </div> */}
    </div>
  );
};

export default ButtonContainer;
