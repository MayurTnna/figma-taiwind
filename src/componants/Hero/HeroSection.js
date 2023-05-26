import React from "react";
import "../Hero/HeroSection.scss";
import Header from "../common/Header";
import searchicon from "../../assets/images/search-button.svg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-main-container">
        <Header />
        <div className=" pt-[62px] pr-[16.5vw] pb-[0px] pl-[16.5vw] max-[1284px]:pl-[11.5vw] max-[1284px]:pr  -[11.5vw] text-center max-[992px]:px-0 max-[992px]:container  max-[992px]:mx-auto">
          <p className="text-[80px] leading-[104px] max-[1200px]:text-[60px] max-[1200px]:leading-[80px] max-[768px]:leading-[50px]  max-[576px]:leading-[60px] max-[420px]:leading-[40px]  max-[768px]:text-[40px] max-[576px]:text-[30px]  max-[420px]:text-[25px]   -tracking-[0.01em]  capitalize text-white font-Gilroy-Bold ">
            make your interior more minimalistic & modern
          </p>
        </div>
        <div className="pr-[25vw] pl-[25vw] max-[992px]:pl-[20vw] max-[992px]:pr-[20vw] max-[475px]:pl-[4vw] max-[475px]:pr-[4vw]  pb-[0px] text-center  ">
          <p className="opacity-[0.8] text-white text-[24px] leading-[38px] max-[1200px]:leading-[30px] max-[768px]:leading-[20px] font-Gilroy-Regular max-[1200px]:text-[18px] max-[992px]:text-[14px] ">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
        </div>
        <div className="pt-[30px] text-center flex justify-center">
          <div className="text-center relative">
            <input
              className="bg-opacity-15 placeholder-white text-white bg-white/[0.15] border-[0.861538px] border-white backdrop-blur-sm rounded-[42px] w-[344px] h-[56px] font-Gilroy-Regular text-[18px] leading-[150%]  opacity-[0.8] max-[370px]:w-[auto] "
              type="text"
              placeholder="search furniture"
            />
            <img
              src={searchicon}
              alt="search-icon"
              className="absolute top-[7px] right-[10px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
