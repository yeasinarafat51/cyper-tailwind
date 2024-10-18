
import Searchloctation from '../common/Searchloctation'
import icon from '../Images/Group 1171276286.png'
import icon1 from '../Images/Group 1171276286 (1).png'
import Card from '../shared/Card'
import Cardlocation from '../shared/Cardlocation'

const Locations = () => {
  return (
    <div>
        <Searchloctation searchname='Incidents - DR-4699 March 2023 Severe Storms '/>

        <div className='bg-white grid grid-cols-2 px-2'>
            {/* location */}
            <div className='space-y-9'>
                {/* loca1 */}
                <div className='flex justify-start items-center '>
                    <img src={icon} alt="./" />
                   <div>
                   <p className='font-[400px] text-[14px] text-[#71717A]'>Location</p>
                   <h2 className="text-[20px] font-semibold  ">Tulare County,  Los Angles, CA 23415</h2>
                   </div>


                </div>
                <div className='flex justify-start items-center '>
                    <img src={icon1} alt="./" />
                   <div>
                   <p className='font-[400px] text-[14px] text-[#71717A]'>Approx. Cost:</p>
                   <h2 className="text-[20px] font-semibold  ">$60,607,456.00</h2>
                   </div>

                  


                </div>
                {/* loca1 */}
                <div className='w-[677px] h-[77px]'>
                   <h2 className="text-[14px] font-semibold  ">Description</h2>
                   <p className='font-[400px] text-[16px] text-[#71717A]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                   </div>

                     {/* location-part */}
           <div>
           <h2 className="text-[14px] font-semibold  ">Locations</h2>
           <Cardlocation/>
           </div>
            
            {/* location-part */}

            </div>
          
            {/* map */}
            <div>
<h1>fgdpgodp</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Locations
