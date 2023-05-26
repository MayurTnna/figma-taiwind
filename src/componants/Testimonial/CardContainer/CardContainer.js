import React from "react";
import star from "../../../assets/images/star.svg";
import halfstar from "../../../assets/images/half-main-star.svg";

const CardContainer = ({ client }) => {
  return (
    <>
      <div className="main-container">
        <div
          style={{
            background: `url('${client.clientMainImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className=" min-w-[370px] w-[100%] h-[476px] bg-no-repeat relative max-[420px]:min-w-[270px] max-[420px]:bg-contain "
        >
          <div className="bg-[url('/src/assets/images/Union.svg')] w-[334px] h-[239px] absolute top-[220px] max-[420px]:top-[166px] right-[18px] left-[18px] bottom-[18px]  max-[420px]:w-[233px] max-[420px]:bg-contain bg-no-repeat  ">
            <img
              src={client.circleImg}
              alt="person1"
              className="absolute top-[-2px] left-[130px] max-[420px]:w-[57px] max-[420px]:top-[-2px] max-[420px]:left-[89px]"
            />
            <div className="pt-[70px] font-Gilroy-Bold text-[18px] leading-[21px] text-center uppercase text-black max-[420px]:pt-[45px] max-[420px]:text-[14px]">
              {client.name}
            </div>
            <div className="font-Gilroy-Regular text-[12px] leading-[14px] text-center  text-black opacity-[0.6] pt-[6px] max-[420px]:text-[8px] max-[420px]:pt-0">
              {client.title}
            </div>
            <div className="font-Gilroy-Regular text-[14px] leading-[16px] text-center  text-black opacity-[0.8] pt-[6px] pl-[42px] pr-[40px] max-[420px]:pt-0 max-[420px]:text-[10px]">
              {client.description}
            </div>
            <div className="flex justify-center pt-[23px] max-[420px]:pt-[12px]">
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
