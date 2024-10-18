import { useState } from 'react';
import { items } from '../shared';
import Divider from './Divider';

const ItemList = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active item

  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked item as active
  };

  return (
   <div>
     <Divider searchtitle='New Incident'/>
     <div className='bg-white'>
     
     <h1 className="text-[32px] font-bold text-center py-6">
       Which of these best describes the incident?
     </h1>
     <div className="lg:px-72 md:px-72 px-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
       {items.map((item, index) => (
         <div
           key={item.id}
           onClick={() => handleClick(index)} // Handle item click
           className={`w-[180px] h-[69px] py-[22px] px-5 gap-2 rounded overflow-hidden shadow-lg flex items-center cursor-pointer ${
             activeIndex === index ? 'bg-[#F26922] text-white' : 'bg-[#F4F4F5] text-black'
           }`}
         >
           <img
             className="w-[25px] h-[25px] object-cover rounded-full"
             src={item.src}
             alt={item.alt}
           />
           <div className="ml-3">
             <span className="text-sm font-normal">{item.title}</span>
           </div>
         </div>
       ))}
     </div>
   </div>
   </div>
  );
};

export default ItemList;
