import React from "react";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="pt-[240px] max-[768px]:pt-[20px]">
        <div className="bg-[#f7f7f7]">
          <div className=" pt-[118px] pl-[118px] max-[992px]:pl-[150px] max-[992px]:mx-auto  max-[768px]:pl-0 max-[768px]:pt-[20px] max-[768px]:mx-auto max-[768px]:text-center">
            <div className="grid my-4 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols:1  gap-x-[20px] max-[992px]:gap-y-[20px]">
              <div className="first-column lg:col-span-2">
                <div className="text-[28px] leading-[33px] uppercase text-black font-Gilroy-Bold tracking-[0.01em]">
                  Panto
                </div>
                <div className="pt-[29px] pr-[152px] text-[15px] leading-[160%] opacity-80 text-black font-Gilroy-Medium tracking-[0.01em] max-[768px]:text-[11px] max-[768px]:pr-0 ">
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </div>
              </div>
              <div className="second-column lg:col-span-1">
                <div className=" font-DM-Sans not-italic font-[400] text-[17px] leading-[22px] tracking-[-0.231818px] text-footer-text-color ">
                  Services
                </div>
                <div className=" font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] pt-[20px]">
                  Email Marketing
                </div>
                <div className=" font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] pt-[16px]">
                  Campaigns
                </div>
                <div className=" font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] pt-[16px]">
                  Branding
                </div>
              </div>
              <div className="third-column lg:col-span-1">
                <div className=" font-DM-Sans not-italic font-[400] text-[17px] leading-[22px] tracking-[-0.231818px] text-footer-text-color ">
                  Furniture
                </div>
                <div className=" font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] pt-[20px]">
                  Beds
                </div>
                <div className=" font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] pt-[16px]">
                  Chairs
                </div>
                <div className=" font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] pt-[16px]">
                  All
                </div>
              </div>
              <div className="fourth-column lg:col-span-1">
                <div className=" font-DM-Sans not-italic font-[400] text-[17px] leading-[22px] tracking-[-0.231818px] text-footer-text-color ">
                  Follow us
                </div>
                <div className="email flex items-center pt-[20px] max-[768px]:justify-center ">
                  <p>
                    <img src={facebook} alt="fb" />
                  </p>
                  &nbsp; <p className="ml-3 not-italic leading-[160%] text-[15px] font-Gilroy-Medium text-black ">Facebook</p>
                </div>
                <div className="campaigns flex items-center pt-[16px] max-[768px]:justify-center ">
                  <p>
                    <img src={twitter} alt="fb" />
                  </p>
                  &nbsp; <p className="ml-2 not-italic leading-[160%] text-[15px] font-Gilroy-Medium text-black ">Twitter</p>
                </div>
                <div className="binding flex items-center pt-[16px] max-[768px]:justify-center ">
                  <p>
                    <img src={instagram} alt="fb" />
                  </p>
                  &nbsp; <p className="ml-1 ml-2 not-italic leading-[160%] text-[15px] font-Gilroy-Medium text-black">instagram</p>
                </div>
              </div>
            </div>
            <div className="pt-[130px] pb-[56px] flex justify-between max-[768px]:pt-[10px] max-[768px]:text-center max-[768px]:flex-col max-[768px]:pb-[20px] ">
              <div
                className="font-DM-Sans not-italic text-[15px] leading-[20px]
              tracking-[-0.204545] text-[#1e2833] opacity-[0.5] mix-blend-normal max-[768px]:mb-[10px] "
              >
                Copyright © 2021
              </div>
              <div className="flex pr-[188px] max-[768px]:text-center  max-[768px]:flex-col  max-[768px]:p-0  max-[768px]:mb-[10px] ">
                <div className="font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] max-[768px]:mb-[10px] mr-[40px] max-[768px]:mr-0">
                  Terms & Conditions
                </div>
                <div className="font-Gilroy-Medium text-[15px] leading-[160%] text-black opacity-[0.8] ">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
