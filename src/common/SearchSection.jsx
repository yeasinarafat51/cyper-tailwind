/* eslint-disable react/prop-types */

import { FiSearch } from "react-icons/fi"; // Search Icon
import Button from "./Button";

const SearchSection = ({ searchtitle }) => {
  return (
    <section className="w-full lg:h-[70px] md:h-[70px] h-auto pb-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-[#E4E4E7] xl:px-10 lg:px-10 px-4 md:px-8 shadow-lg">
      {/* Title */}
      <div className="w-auto h-auto mb-4 lg:mb-0">
        <p className="font-normal text-[12px] text-[#71717A]">Welcome back</p>
        <h2 className="text-[22px] lg:text-[26px] font-semibold">
          {searchtitle}
        </h2>
      </div>

      {/* Search Bars */}
      <div className="flex lg:justify-end flex-col lg:flex-row items-start lg:items-center md:justify-end  md:flex-row  md:items-center gap-2">
        {/* First Search Bar */}
        <div className="flex items-center p-3 gap-2 w-full lg:w-[190px] h-[42px] bg-white">
          <FiSearch className="w-[18px] text-gray-500" />
          <input
            type="text"
            placeholder="Search incident"
            className="text-[#71717A] w-full lg:w-[100px] focus:outline-none"
          />
        </div>

        {/* Second Search Bar */}
        <div className="w-full lg:w-[190px] h-[42px]">
          <input
            type="text"
            placeholder="Sort By: Date modified"
            className="w-full h-full px-4 text-black focus:outline-none"
          />
        </div>

        {/* Button */}
        <Button className="flex justify-center gap-2 items-center w-full lg:w-auto bg-[#F26922] text-white lg:py-2 md:py-2 py-2 px-4">
          Cypher AI
        </Button>
      </div>
    </section>
  );
};

export default SearchSection;
