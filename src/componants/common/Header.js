import React from "react";
import logo from "../../assets/images/Panto.svg";
import bag from "../../assets/images/Bag.svg";
import egg from "../../assets/images/egg-zero.svg";
import dropdown from "../../assets/images/dropdown.svg";

const Header = () => {
  return (
    <>
      <div className="pt-[40px]">
        <nav className="bg-transparent  w-full z-20 top-0 left-0 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#df" className="flex items-center">
              <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            </a>
            <div className="flex lg:order-2">
              <button
                type="button"
                className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0  "
              >
                <div className="bag-container">
                  <div className="relative w-30 ">
                    <img src={bag} alt="bag" className="bag" />
                    <img
                      src={egg}
                      alt="egg"
                      className="absolute top-1 right-[-3px]"
                    />
                  </div>
                </div>
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border-none bg-white"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center  justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="navbar-sticky"
            >
              <ul className="flex bg-transparent flex-col p-4 max-[768px]:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 border-none">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center  w-full py-2 pl-3 pr-4  rounded  font-Gilroy-Medium text-[18px] text-white lg:hover:bg-transparent lg:border-0 lg:p-0 lg:w-auto dark:text-white  dark:focus:text-white dark:hover:bg-gray-700 lg:dark:hover:bg-transparent  max-[768px]:pr-0 max-[768px]:pl-0"
                >
                  Favourite
                  <img src={dropdown} alt="dropdown" className="ml-2" />
                </button>
                <li className="">
                  <a
                    href="#dddedewd"
                    className="block py-2 pl-3 pr-4 text-white rounded lg:hover:bg-transparent  max-[768px]:pl-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 font-Gilroy-Medium text-[18px] ml-[65px] max-[768px]:ml-0"
                  >
                    Shop
                  </a>
                </li>
                <li className="">
                  <a
                    href="#dddedewd"
                    className="block py-2 pl-3 pr-4 text-white rounded lg:hover:bg-transparent  max-[768px]:pl-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 font-Gilroy-Medium text-[18px] ml-[65px] max-[768px]:ml-0"
                  >
                    About us
                  </a>
                </li>
                <li className="">
                  <a
                    href="#dddedewd"
                    className="block py-2 pl-3 pr-4 text-white rounded lg:hover:bg-transparent  max-[768px]:pl-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 font-Gilroy-Medium text-[18px] ml-[65px] max-[768px]:ml-0"
                  >
                   Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
