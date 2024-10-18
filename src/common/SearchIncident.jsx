/* eslint-disable react/prop-types */
import { AiOutlinePlus } from "react-icons/ai";

import { FiSearch } from 'react-icons/fi'; // Search Icon
import Button from './Button';
import { Link } from "react-router-dom";

const Searchincident = ({searchtitle,searchname}) => {
  return (
    <section className="w-[100%] lg:h-[70px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:pb-4  bg-[#E4E4E7]  xl:px-10 lg:px-10 md:px-8    shadow-lg">
      {/* Title */}
     <div className='w-[137px] h-[54px] '>
     <p className='font-[400px] text-[12px] text-[#71717A]'>{searchname}</p>
     <h2 className="text-[26px] font-semibold  ">{searchtitle}</h2>
     
     </div>

      {/* Search Bars */}
      <div className=" flex lg:justify-end justify-items-start  items-center gap-2">
        {/* First Search Bar */}
        <div className="flex  items-center p-3 gap-2 w-[190px] h-[42px] bg-white ">
        <FiSearch className="w-[18px]  top-2 right-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search incident"
            className="  text-[#71717A] w-[100px]    "
            
          />
         
        </div>

        {/* Second Search Bar */}
        <div className=" w-[190px] h-[42px]">
          <input
            type="text"
            placeholder="Sort By: Date modified"
            className="w-full h-full px-4  text-black"
          />
         
        </div>
        <Link to='/incident'>
        <Button className='flex justify-center gap-2 items-center bg-[#F26922] text-[#FAFAFA]'><AiOutlinePlus  className="text-white w-[16px] h-[16px]"/>Cypher AI</Button>
        </Link>
      </div>
    </section>
  );
};

export default Searchincident;
{/* <Button className='flex justify-center gap-2 items-center bg-[#F26922] text-[#FAFAFA]'><AiOutlinePlus  className="text-white w-[16px] h-[16px]"/>Cypher AI</Button> */}
