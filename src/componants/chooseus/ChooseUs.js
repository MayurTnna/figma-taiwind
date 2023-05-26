import React from "react";
import yellowArrow from "../../assets/images/yellow-arrow.svg";

const ChooseUs = () => {
  return (
    <>
      <div className="bg-white container mx-auto">
        <div className=" pt-[120px] pb-[120px] pr-[80px] max-[992px]:pr-0  max-[768px]:pr-0 max-[768px]:flex max-[768px]:justify-center  max-[768px]:items-center  max-[768px]:mx-auto max-[768px]:container max-[768px]:pt-0 max-[768px]:pb-[20px]">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-x-[28px]">
            <div className="choose-title leading-[49px] text-black text-[42px] max-[475px]:text-[32px] font-Gilroy-Bold text-start pr-[37px] pt-[38px] max-[1200px]:w-[auto] max-[1200px]:text-center max-[1200px]:pr-0 ">
              Why Choosing Us
            </div>
            <div>
              <div className="text-[24px] leading-[28px] text-black font-Gilroy-Bold max-[992px]:text-center max-[767px]:pt-[10px]">
                Luxury facilities
              </div>
              <p className="subtitle-text  font-Gilroy-Regular pr-[28px] max-[992px]:pr-0 text-[16px] leading-[185%]  text-black opacity-[0.8] pt-[20px] max-[992px]:text-center max-[992px]:w-auto max-[992px]:pr-[25px] max-[992px]:pl-[25px] max-[425px]:text-[13px] max-[992px]:pr-[10px] max-[992px]:pl-[10px] max-[425px]:pr-[25px] max-[425px]:pl-[25px] ">
                The advantage of hiring a workspace with us is that givees you
                comfortable service and all-around facilities.
              </p>
              <div className="flex  max-[998px]:m-auto pt-[14px] gap-[28px]  max-[992px]:pl-[25px]">
                <p className="text-golden font-Gilroy-Medium text-[14px]leading-[185%] text-orange ">
                  More Info
                </p>
                <img
                  src={yellowArrow}
                  alt="yellowArrow"
                  className="yellowArrow  pr-0 pb-0  max-[768px]:pl-0"
                />
              </div>
            </div>
            <div>
              <div className="text-[24px] leading-[28px] text-black font-Gilroy-Bold max-[992px]:text-center max-[767px]:pt-[10px]">
                Affordable Price
              </div>
              <p className="subtitle-text  font-Gilroy-Regular text-[16px] leading-[185%]  text-black opacity-[0.8] pt-[20px] max-[992px]:text-center max-[992px]:w-auto  pr-[28px] max-[992px]:pr-[25px] max-[992px]:pl-[25px] max-[425px]:text-[13px] max-[425px]:pr-[25px] max-[425px]:pl-[25px]">
                You can get a workspace of the highst quality at an affordable
                price and still enjoy the facilities that are oly here.
              </p>
              <div className="flex max-[998px]:m-auto pt-[14px] max-[992px]:pl-[25px] gap-[28px] ">
                <p className="font-Gilroy-Medium text-orange text-[14px]leading-[185] ">
                  More Info
                </p>
                <img
                  src={yellowArrow}
                  alt="yellowArrow"
                  className="yellowArrow  pr-o pb-0 pl-[13px] max-[768px]:pl-0"
                />
              </div>
            </div>
            <div>
              <div className="text-[24px] leading-[28px] text-black font-Gilroy-Bold max-[992px]:text-center max-[767px]:pt-[10px]">
                Many Choices
              </div>
              <p className="subtitle-text  font-Gilroy-Regular text-[16px] leading-[185%]  text-black opacity-[0.8] pt-[20px] max-[992px]:text-center max-[992px]:w-auto pr-[28px] max-[992px]:pr-[25px] max-[992px]:pl-[25px] max-[425px]:text-[13px] max-[425px]:pr-[25px] max-[425px]:pl-[25px] ">
                We provide many unique work space choices so that you can choose
                the workspace to your liking.
              </p>
              <div className="flex max-[998px}:m-auto pt-[14px] max-[992px]:pl-[25px] gap-[28px] ">
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
      </div>
    </>
  );
};

export default ChooseUs;
