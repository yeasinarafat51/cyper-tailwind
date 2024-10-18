
import { itemsincident } from '../shared'
import divi from '../Images/Group 1171276283.png'
import Button from './Button'

const Incedent = () => {
  return (
   <div className='bg-white py-16'>
     <h1 className="text-[32px] font-[700px] text-center">Let’s get started</h1>
     <p className=" text-[14px] font-[400px] text-[#71717A] text-center py-4">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
     <div className='flex justify-center items-center py-4'>
     <img className='w-[609px] h-[29px] ' src={divi} alt="./" />
     </div>
    <div className='flex flex-wrap lg:justify-center lg:gap-8 py-8 gap-2'>
      {itemsincident.map(incident =>(
         <div key={incident.alt} className="  w-[235px] h-[269px] rounded overflow-hidden shadow-lg bg-white">
         <div className='h-[140px]'>
         <img className="w-[54] h-[54px] mt-4 ml-4 object-cover" src={incident.src} alt='/' />
         </div>
          <div className="h-[97px] ml-4">
            <h1 className="font-semibold text-[20px] w-[190px] h-[43px] ">{incident.title}</h1>
            <p className="text-[#71717A] h-[32px] w-[195px] text-[14px] mt-6 font-[400px]">{incident.para}</p>
          </div>
        </div>
      ))
      }
    </div>
    <div className='flex justify-center py-16'>
      <Button className=' bg-[#F26922] text-[#FAFAFA]'>Get started</Button>
    </div>
   </div>
  )
}

export default Incedent
