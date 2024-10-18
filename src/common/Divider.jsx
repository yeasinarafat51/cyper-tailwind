/* eslint-disable react/prop-types */
import dvi from '../Images/Group 1171276285.png'
import dvi2 from '../Images/Group 1171276282.png'
// {/* <img src={dvi} className='w-[527px] h-[5px] my-8' alt="" /> */}
import { FiSearch } from 'react-icons/fi'; // Search Icon
import Button from './Button';

const Divider = ({searchtitle}) => {
  return (
    <section className="w-[100%] lg:h-[70px] md:h-[70px] h-[120px] pb-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3   bg-[#E4E4E7]  xl:px-8 lg:px-8 md:px-8   shadow-lg">
    {/* Title */}
   <div className='flex items-center  justify-items-start  gap-2 '>
   <div>
    <img src={dvi2} className='w-[41px] h-[41px]' alt="" />
   </div>
   <div  className='w-[179px] h-[54px]'>
   <p className='font-[400px] text-[12px] text-[#71717A]'>Home - Incidents - New Incident</p>
   <h2 className="text-[26px] font-semibold  ">{searchtitle}</h2>
   </div>
   
   </div>
   <div>
   <img src={dvi} className='w-[527px] h-[5px] my-8' alt="" />
   </div>

    
    <div className=" flex lg:justify-end justify-items-start  items-center gap-2 mb-2">
     
      <Button className='bg-[#FAFAFA] text-[#71717A]'>Back</Button>
      <Button className='bg-[#F26922] text-[#FAFAFA]'>Next step</Button>
    </div>
  </section>
  )
}

export default Divider
