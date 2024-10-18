import Divider from "../common/Divider";

const Textarea = () => {
  return (
    <div>
      <Divider
        searchtitle="New Incident"
        link="/map "
        back="/textarea"
        step="Next step"
      />
      <div className="flex justify-center bg-white px-4 py-8">
        <div className="bg-white">
          <div>
            <h1 className="text-[24px] font-[700px] ">
              Let’s give the incident a title?
            </h1>
            <p className="text-[14px] font-[400px] text-[#71717A]">
              Make a title that will easily identify the incidents
            </p>
            <div className="flex flex-col my-4 lg:w-[752px] md:w-[600px] w-[400px] h-[50px] ">
              <input
                type="text"
                placeholder="Add title here"
                className="w-full bg-[#E4E4E7] text-[#71717A] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[24px] font-[700px]">
              Describe what happened during the incident?
            </h1>
            <p className="text-[14px] font-[400px] text-[#71717A]">
              Share some information about the incident. The when, where, how.{" "}
            </p>
            <div className=" lg:w-[752px] md:w-[600px] w-[400px] h-[127px]">
              <textarea
                placeholder=" type here..."
                className="w-full bg-[#E4E4E7] text-[#71717A] h-32 p-2 my-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
