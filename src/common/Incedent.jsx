import icon from '../Images/Frame.png'

const Incedent = () => {
  return (
    <div className=" m-20 w-[235px] h-[269px] rounded overflow-hidden shadow-lg bg-white">
   <div className='h-[140px]'>
   <img className="w-[54] h-[54px] mt-4 ml-4 object-cover" src={icon} alt='/' />
   </div>
    <div className="h-[97px] ml-4">
      <h1 className="font-semibold text-[20px] w-[190px] h-[43px] ">What type of incident?</h1>
      <p className="text-[#71717A] h-[32px] w-[195px] text-[14px] mt-6 font-[400px]">Choose the category that best describes the incident.</p>
    </div>
  </div>
  )
}

export default Incedent
