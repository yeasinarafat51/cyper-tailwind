import Divider from "../common/Divider";
import bg1 from "../Images/map.png";
import { FiSearch } from "react-icons/fi"; // Search Icon

const Map = () => {
  return (
    <div>
      <Divider back="/map" step="Finish" />
      <div className="flex justify-center items-center bg-white  ">
        <div className="mx-8 my-8 space-y-2">
          <h1 className="text-[24px] font-[700px]">Where’s the incident?</h1>
          <p className=" lg:w-[518px] text-[14px] font-[400px] text-[#71717A]">
            Enter a GPS, address. or pin point on the map. Try to be as accurate
            as possible, or click:Jurisdiction Wide
          </p>
          <div
            className="w-lg:w-[752px] md:w-[600px] w-[400px] h-[490px]  bg-cover bg-center"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="mx-2 py-2 space-y-2">
              <div className="flex  items-center p-3 gap-2 w-[169px] h-[8px] bg-white ">
                <FiSearch className="w-[18px]  top-2 right-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter incident address or GPS"
                  className="  text-[#71717A] w-[100px] text-[12px] font-[400px]   "
                />
              </div>
              <div className="flex  items-center p-3 gap-2 w-[169px] h-[8px] bg-white ">
                <FiSearch className="w-[18px]  top-2 right-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Pinpoint damage"
                  className="  text-[#71717A] w-[100px] text-[12px] font-[400px]    "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
