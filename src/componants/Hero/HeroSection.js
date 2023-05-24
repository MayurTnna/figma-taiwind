import React from "react";
import "../Hero/HeroSection.scss";
import Header from "../common/Header";
import searchicon from "../../assets/images/search-button.svg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-main-container">
        <Header />
        <div className=" pt-[92px] pr-[289px] pb-[0px] pl-[289px] text-center max-[992px]:px-0 max-[992px]:container  max-[992px]:mx-auto">
          <p className="text-[80px] max-[1200px]:text-[60px] max-[992px]:text-[60px] max-[768px]:text-[50px] leading-relaxed  tracking-tighter uppercase text-white font-Gilroy-Bold ">
            Make your interior more minimalistic & modern
          </p>
        </div>
        <div className="pt-[14px] pr-[416px] pl-[418px] pb-[0px] text-center max-[992px]:px-0 max-[992px]:container  max-[992px]:mx-auto">
          <p className="opacity-[0.8] text-white text-[24px] leading-[38px] font-Gilroy-Regular max-[1200px]:text-[18px]">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
        </div>
        <div className="pt-[45px] text-center flex justify-center">
          <div className="text-center relative">
            <input
              className="bg-opacity-15 text-white text-left bg-white/[0.15] border-[0.861538px] border-white bg-blur-[4px] rounded-[42px] w-[344px] h-[56px] font-Gilroy-Regular text-[18px] leading-[150%] pl-10 text-white opacity-[0.8] max-[475px]:w-[auto]"
              type="text"
              value="search furniture"
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
