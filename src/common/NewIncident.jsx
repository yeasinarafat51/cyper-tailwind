import group from '../Images/Group.png'

const NewIncident = () => {
  return (
    <div className="w-[180px] h-[69px] py-[22px] px-5 gap-2 rounded overflow-hidden shadow-lg bg-white flex items-center">
    <img className="w-[25px] h-[25px] object-cover rounded-full ml-2" src={group} alt='./' />
    <div className="ml-4">
      <div className="font-[400px] text-[14px]">Avalanche</div>
    </div>
  </div>
  )
}

export default NewIncident
