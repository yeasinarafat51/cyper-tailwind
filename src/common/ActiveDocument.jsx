/* eslint-disable react/prop-types */
import img from "../Images/Rectangle 420102.png";

const ActiveDocument = ({ title, name }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 ">
        <h2 className="text-[14px] font-semibold  ">{title}</h2>
        <p className="font-[400px] text-[14px] text-[#71717A]">See all</p>
      </div>
      <div className="space-y-4">
        <div className="  flex justify-start items-center gap-4 lg:w-[679px] md::w-[679px] h-[108px] bg-[#E4E4E7] rounded overflow-hidden px-2 shadow-sm ">
          <img className="w-[78px] h-[78px] object-cover" src={img} alt="/" />
          <div className="gap-4">
            <h1 className="font-semibold text-[16px] mt-2 mb-1">{name}</h1>
            <p className="text-[#71717A] text-[14px] mb-2">
              Location name:16.12212, -122.1424
            </p>
            <span className="text-[16px] font-semibold pt-2 ">
              $1,456,654.00
            </span>
          </div>
        </div>
        <div className="  flex justify-start items-center gap-4 lg:w-[679px] md::w-[679px] h-[108px] bg-[#E4E4E7] rounded overflow-hidden px-2 shadow-sm ">
          <img className="w-[78px] h-[78px] object-cover" src={img} alt="/" />
          <div className="gap-4">
            <h1 className="font-semibold text-[16px] mt-2 mb-1">
              Activity name
            </h1>
            <p className="text-[#71717A] text-[14px] mb-2">
              Location name:16.12212, -122.1424
            </p>
            <span className="text-[16px] font-semibold pt-2 ">
              $1,456,654.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveDocument;
