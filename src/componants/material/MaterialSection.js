import React from "react";

import yellowArrow from "../../assets/images/yellow-arrow.svg";
import leftmaingroup from "../../assets/images/material-left-group.svg";

const MaterialSection = () => {
  return (
    <>
      <div className="pt-[240px] pl-[80px] max-[992px]:pt-0 max-[992px]:pl-0 max-[768px]:pt-0 max-[768px]:pl-0">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-[20px] ">
          <div className="first-col">
            <div className="pt-[83px] max-[768px]:pt-[50px]">
              <div className=" text-[18px] leading-[21px] font-Gilroy-Regular text-orange tracking-[0.175em] uppercase max-[992px]:mx-auto max-[992px]:text-center">
                Materials
              </div>
              <div className="pt-[20px] text-[42px] pr-[237px] max-[992px]:text-center max-[992px]:mx-auto max-[992px]:pr-0 max-[475px]:text-[32px]  text-black font-Gilroy-Bold   leading-[49px] max-[992px]:container   max-[475px]:leading-[35px] ">
                Very serious materials for making furniture
              </div>
              <div className="font-Gilroy-Regular pr-[94px] text-[18px] leading-[185%] opacity-[0.8]  pt-[20px] max-[992px]:mx-auto max-[992px]:text-center   max-[992px]:container max-[992px]:pl-[25px] max-[992px]:pr-[25px] max-[992px]:text-[15px]">
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
              </div>
              <div className="flex max-[998px]:mx-auto pt-[24px] max-[992px]:justify-center">
                <p className="text-orange font-Gilroy-Medium text-[14px]leading-[185]">
                  More Info
                </p>
                <img
                  src={yellowArrow}
                  alt="yellowArrow"
                  className="yellowArrow float-right  pr-0 pb-0 pl-[13px] max-[768px]:pl-0"
                />
              </div>
            </div>
          </div>
          <div className="second-col ">
            <img src={leftmaingroup} className="float-right" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MaterialSection;
