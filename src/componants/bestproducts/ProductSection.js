import React from "react";
import yellowArrow from "../../assets/images/yellow-arrow.svg";

import SliderMain from "./slider/SliderMain";

const ProductSection = () => {
  return (
    <>
      <div className=" pt-[50px] bg-[#f7f7f7]">
        <div className=" text-center title-main-text max-[475px]:text-[32px]  ">
          Best Selling Product
        </div>
        <div className="text-center pt-[32px]">
          <div
            className="inline-flex justify-between  bg-[#eeeeee] w-[348px] max-[420px]:w-[100%]  h-auto rounded-[44px] p-[6px] hover:bg-[#eeeeee]  "
            role="group"
          >
            <button
              type="button"
              className="bg-[#ffffff] rounded-[32px] w-[84px] h-[45px]  text-sm font-medium border border-gray-200  hover:bg-gray-100   dark:text-white dark:hover:text-white  dark:focus:text-white border-none text-black opacity-[0.8] text-[18px] font-Gilroy-Regular leading-[185%] px-4 py-2"
            >
              Chair
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium  border border-gray-200  dark:text-white dark:hover:text-white  dark:focus:text-white border-none text-black opacity-[0.8] text-[18px] font-Gilroy-Regular leading-[185%]"
            >
              Beds
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium  border border-gray-200  hover:bg-gray-100   dark:text-white dark:hover:text-white  dark:focus:text-white border-none
              text-black opacity-[0.8] text-[18px] font-Gilroy-Regular leading-[185%]"
            >
              Sofa
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium   border  border-gray-200  hover:bg-gray-100   dark:text-white dark:hover:text-white  dark:focus:text-white border-none first-letter: text-black opacity-[0.8] text-[18px] font-Gilroy-Regular leading-[185%] "
            >
              Lamp
            </button>
          </div>
        </div>
        <SliderMain />

        <div className="flex justify-center max-[998px]:m-auto pt-[14px] pb-[50px] max-[992px]:justify-center">
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
    </>
  );
};

export default ProductSection;
