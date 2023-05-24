import React from "react";
import person1 from "../../../assets/images/person1.svg";
import star from "../../../assets/images/star.svg";
import halfstar from "../../../assets/images/half-main-star.svg";

const CardContainer = () => {
  return (
    <>
      <div className="main-container">
        <div className=" bg-[url('/src/assets/images/test1.svg')] min-w-[370px] w-[100%] h-[476px] bg-no-repeat relative">
          <div className="bg-[url('/src/assets/images/Union.svg')] w-[334px] h-[239px] absolute top-[220px] right-[18px] left-[18px] bottom-[18px]">
            <img
              src={person1}
              alt="person1"
              className="absolute top-[7px] left-[142px]"
            />
            <div className="pt-[70px] font-Gilroy-Bold text-[18px] leading-[21px] text-center uppercase text-black ">
              Bang Upin
            </div>
            <div className="font-Gilroy-Regular text-[12px] leading-[14px] text-center  text-black opacity-[0.6] pt-[6px]">
              Pedagang Asongan
            </div>
            <div className="font-Gilroy-Regular text-[14px] leading-[16px] text-center  text-black opacity-[0.8] pt-[6px] pl-[42px] pr-[40px]">
              “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
              terlihat mahal“
            </div>
            <div className="flex justify-center pt-[23px]">
              <img src={star} alt="not star" className="px-1" />
              <img src={star} alt="not star" className="px-1" />
              <img src={star} alt="not star" className="px-1" />
              <img src={star} alt="not star" className="px-1" />
              <img src={halfstar} alt="not star" className="px-1 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
