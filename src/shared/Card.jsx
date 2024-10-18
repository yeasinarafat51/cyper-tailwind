
import { itemscard } from '.'


const Card = () => {
  return (
    <div className='bg-white py-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-1 lg:pl-6 sm:px-auto'>
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
