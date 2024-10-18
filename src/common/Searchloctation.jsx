/* eslint-disable react/prop-types */
import { AiOutlinePlus } from "react-icons/ai";

import { FiSearch } from "react-icons/fi"; // Search Icon
import Button from "./Button";
import { Link } from "react-router-dom";
import tree from "../Images/fi_15330449 (1).png";

const Searchloctation = ({ searchname }) => {
  return (
    <section className="w-[100%] lg:h-[70px] h-[120px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-4  bg-[#E4E4E7]  xl:px-10 lg:px-10 md:px-8  pl-4  shadow-lg">
      {/* Title */}
      <div className="w-[583px] h-[53px] ">
        <p className="font-[400px] text-[12px] text-[#71717A]">{searchname}</p>
        <div className="flex justify-start items-center gap-2">
          <img className="w-[25px] h-[25px]" src={tree} alt="./" />
          <h2 className="lg:text-[26px] text-[16px] font-semibold  ">
            DR-4699 March 2023 Severe Storms
          </h2>
        </div>
      </div>

      {/* Search Bars */}
      <div className=" flex lg:justify-end justify-items-start  items-center gap-2">
        {/* First Search Bar */}
        <div className="flex  items-center p-3 gap-2 lg:w-[190px] md:w-[190px] w-[170px] h-[42px] bg-white ">
          <FiSearch className="w-[18px]  top-2 right-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search incident"
            className="  text-[#71717A] w-[100px]    "
          />
        </div>

        {/* Second Search Bar */}
        <div className=" lg:w-[190px] md:w-[190px] w-[170px] h-[42px]">
          <input
            type="text"
            placeholder="Sort By: Date modified"
            className="w-full h-full px-4  text-black"
          />
        </div>
        <Link to="/incident">
          <Button className="flex justify-center gap-2 items-center bg-[#F26922] text-[#FAFAFA]">
            <AiOutlinePlus className="text-white lg:w-[16px] md:w-[16px] w-[12px] h-[16px]" />
            New Location
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Searchloctation;
