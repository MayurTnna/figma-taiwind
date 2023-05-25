import React from "react";
import star from "../../../assets/images/star.svg";
import plus from "../../../assets/images/plus.svg";


const ProductSlider = ({item}) => {
  return (
    <>
 
      <div className=" w-[100%] h-[492px]">
        <div className="bg-[#FAFAFA] w-[268.09px] h-[239.15px] relative">
          <img
            src={item.imgURL}
            alt="chair1"
            className="absolute left-[25px] top-[-62px] bottom-[33px]"
          />
        </div>
        <div className=" h-[203px] w-[268.09px] bg-[#FFFFFF] border-t-0 rounded-bl-[20px] rounded-br-[20px]">
          <div className=" text-start pl-[22px]">
            <div className=" text-[16.7554px] leading-[20px] pt-[20px] text-[#8d8d8d] font-[400] not-italic font-Inter">
              Chair
            </div>
            <div className=" text-[21.3251px] leading-[26px] pt-[8px] text-[#0d1b39] font-[600] not-italic font-Inter">
             {item.title}
            </div>
            <div className="pt-[8px] flex">
              <img src={star} alt="star" />
              <img src={star} alt="star" className="px-1" />
              <img src={star} alt="star" className="px-1" />
              <img src={star} alt="star" className="px-1" />
              <img src={star} alt="star" className="px-1" />
            </div>
            <div className="flex justify-between text-center pt-[51px]">
              <div className="price-text">
                <span className="text-[15.2322px] leading-[18px]  text-[#0d1b39] font-[600] not-italic -mt-1 font-Inter">
                  $
                </span>
                <span className="text-[21.3251px] leading-[26px] pt-[8px] text-[#0d1b39] font-[600] not-italic font-Inter">
                  {item.price}
                </span>
              </div>
              <div className="pr-[22px] -mt-[10px]">
                <img src={plus} alt="plus" />
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
};

export default ProductSlider;
