import React from "react";

import SliderMain from "./slider/SliderMain";

const ProductSection = () => {
  return (
    <>
      <div className=" pt-[50px] bg-[#f7f7f7]">
        <div className="main-title text-center leading-[49px] text-black text-[42px] font-Gilroy-Bold">
          Best Selling Product
        </div>
        <div className="text-center pt-[32px]">
          <div
            className="inline-flex justify-between  bg-[#eeeeee] w-[348px] max-[768px]:w-[100%] h-auto rounded-[44px]  "
            role="group"
          >
            <button
              type="button"
              className="bg-[#ffffff] rounded-[32px] w-[84px] h-[45px] px-2 py-1 text-sm font-medium border border-gray-200  hover:bg-gray-100   dark:text-white dark:hover:text-white  dark:focus:text-white border-none text-black opacity-[0.8] text-[18px] font-Gilroy-Regular leading-[185%]"
            >
              Chair
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium  border border-gray-200  hover:bg-gray-100   dark:text-white dark:hover:text-white  dark:focus:text-white border-none text-black opacity-[0.8] text-[18px] font-Gilroy-Regular leading-[185%]"
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
        <SliderMain/>
      </div>
    </>
  );
};

export default ProductSection;
