import React from "react";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="pt-[240px] max-[768px]:pt-[20px]">
        <div className="bg-[#f7f7f7]">
          <div className=" pt-[118px] pl-[118px] max-[992px]:pl-[150px] max-[992px]:mx-auto  max-[768px]:pl-0  max-[768px]:mx-auto max-[768px]:text-center">
            <div className="grid my-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols:1">
              <div className="first-column">
                <div className="text-[28px] leading-[33px] uppercase text-black font-Gilroy-Bold tracking-[0.01em]">
                  Panto
                </div>
                <div className="pt-[29px] pr-[84px]text-[15px] leading-[160%] uppercase text-black font-Gilroy-Medium tracking-[0.01em] max-[768px]:text-[13px] max-[768px]:pr-0 ">
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </div>
              </div>
              <div className="second-column">
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
              <div className="third-column">
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
              <div className="fourth-column">
                <div className=" font-DM-Sans not-italic font-[400] text-[17px] leading-[22px] tracking-[-0.231818px] text-footer-text-color ">
                  Follow us
                </div>
                <div className="email">
                  <img src={facebook} alt="fb" />
                  &nbsp; Facebook
                </div>
                <div className="campaigns">
                  <img src={twitter} alt="fb" />
                  &nbsp; Twitter
                </div>
                <div className="binding">
                  <img src={instagram} alt="fb" />
                  &nbsp; instagram
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
