import pic from './../Images/Group 1171276280 (4).png'

const Card = () => {
  return (
    <div className=" w-[306px] h-[342px] rounded overflow-hidden shadow-sm bg-white">
    <img className="w-[306px] h-[253px] object-cover" src={pic} alt='/' />
   <div className='gap-4'>
   <h1 className="font-semibold text-[16px] mt-2 mb-1">Whitechapel Rd.</h1>
      <p className="text-[#71717A] text-[14px] mb-2">Tulare County,  Los Angles, CA 23415</p>
      <span className="text-[16px] font-semibold pt-2 ">$1,456,654.00</span>
   </div>
    
  </div>
  )
}

export default Card
