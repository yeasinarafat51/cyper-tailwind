
import { itemscard } from '.'


const Card = () => {
  return (
    <div className='bg-white py-8 flex flex-wrap lg:gap-4 gap-2 lg:pl-6 pl-16 md:pl-1'>
      {
        itemscard.map(card =>(<div key={card.alt} className=" w-[306px] h-[342px] rounded overflow-hidden shadow-sm bg-white">
          <img className="w-[306px] h-[253px] object-cover" src={card.src} alt={card.alt} />
         <div className='gap-4'>
         <h1 className="font-semibold text-[16px] mt-2 mb-1">{card.title}</h1>
            <p className="text-[#71717A] text-[14px] mb-2">Tulare County,  Los Angles, CA 23415</p>
            <span className="text-[16px] font-semibold pt-2 ">$1,456,654.00</span>
         </div>
          
        </div>))
      }
    </div>
  )
}

export default Card
