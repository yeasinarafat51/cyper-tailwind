import  { useState } from 'react';

import { items } from '../shared';


const ItemList = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active item

 

  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked item as active
  };

  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleClick(index)} // Handle item click
          className={`w-[180px] h-[69px] py-[22px] px-5 gap-2 rounded overflow-hidden shadow-lg bg-[#F4F4F5] flex items-center cursor-pointer ${
            activeIndex === index ? 'bg-[#F26922] text-white' : 'bg-[#F4F4F5] text-black'
          }`}
        >
           
          <img
            className="w-[25px] h-[25px] object-cover rounded-full"
            src={item.src}
            alt={item.alt}
          />
          <div className="ml-3">
            <span className="text-sm font-[400px]">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
