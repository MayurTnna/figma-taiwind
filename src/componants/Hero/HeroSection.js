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
          <p className="text-[80px] leading-[104px] max-[1200px]:text-[60px] max-[1200px]:leading-[80px]  max-[576px]:leading-[60px] max-[420px]:leading-[40px] first-letter:max-[992px]:text-[50px] max-[768px]:text-[40px] max-[576px]:text-[30px]  max-[420px]:text-[25px]   tracking-[-0.01em]  capitalize text-white font-Gilroy-Bold ">
            Make your interior more minimalistic & modern
          </p>
        </div>
        <div className="pt-[14px] pr-[416px] pl-[418px] pb-[0px] text-center max-[992px]:px-0 max-[992px]:container  max-[992px]:mx-auto">
          <p className="opacity-[0.8] text-white text-[24px] leading-[38px] max-[1200px]:leading-[30px] max-[768px]:lleading-[20px] font-Gilroy-Regular max-[1200px]:text-[18px] max-[992px]:text-[14px]">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
        </div>
        <div className="pt-[45px] text-center flex justify-center">
          <div className="text-center relative">
            <input
              className="bg-opacity-15 text-text- white  bg-white/[0.15] border-[0.861538px] border-white bg-blur-[4px] rounded-[42px] w-[344px] h-[56px] font-Gilroy-Regular text-[18px] leading-[150%]  opacity-[0.8] max-[475px]:w-[auto]"
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
