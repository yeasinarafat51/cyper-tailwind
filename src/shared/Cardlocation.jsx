import { itemscard } from ".";

const Cardlocation = () => {
  return (
    <div className="lg:w-[670px] bg-white py-8 flex flex-wrap lg:gap-3 gap-2 lg:pl-0 pl-4 md:pl-0">
      {itemscard.map((card) => (
        <div
          key={card.alt}
          className=" w-[214.2px] h-[241.5px] rounded overflow-hidden shadow-sm bg-white transform transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <img
            className="w-[214.2px] h-[177.1px] object-cover"
            src={card.src}
            alt={card.alt}
          />
          <div className="">
            <h1 className="font-semibold text-[14px]  ">
              {card.title}
            </h1>
            <p className="text-[#71717A] text-[12px] ">
              Tulare County, Los Angles, CA 23415
            </p>
            <span className="text-[14px] font-semibold  ">
              $1,456,654.00
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardlocation;
