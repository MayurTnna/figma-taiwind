import React from "react";
import yellowArrow from "../../assets/images/yellow-arrow.svg";
import experienceLeft from "../../assets/images/mainexperiencegot.svg"

const Experience = () => {
  return (
    <>
      <div className="pt-[240px] max-[768px]:pt-[70px]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-[20px]">
          <div className="first-col">
            <div className="  max-w-[629px] min-h-[445px] bg-no-repeat relative max-[992px]:w-auto ">
              <img src={experienceLeft} alt="expLeft"/>
            </div>
          </div>
          <div className="second-col">
            <div className=" pt-[83px] max-[992px]:m-auto max-[992px]:text-center max-[768px]:m-auto max-[768px]:text-center">
              <div className="yellow-exp text-[18px] leading-[21px] font-Gilroy-Regular text-orange tracking-[0.175em] uppercase ">
                Experiences
              </div>
            </div>
            <div className="main-subtitle text-black font-Gilroy-Bold  text-[42px] leading-[49px] pt-[20px] max-[992px]:container max-[992px]:mx-auto max-[992px]:text-center  pr-[284px] max-[992px]:pr-0">
              we provide you the best experience
            </div>
            <div className="font-Gilroy-Regular text-[18px] leading-[185%] opacity-[0.8] pr-[141px] pt-[20px] max-[992px]:m-auto max-[992px]:text-center max-[992px]:pr-0  max-[992px]:container max-[992px]:mx-auto">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </div>
            <div className="flex max-[998px}:m-auto pt-[24px] max-[992px]:justify-center">
              <p className="text-orange font-Gilroy-Medium text-[14px]leading-[185]">
                More Info
              </p>
              <img
                src={yellowArrow}
                alt="yellowArrow"
                className="yellowArrow  pr-o pb-0 pl-[13px] max-[768px]:pl-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
