import SearchSection from "../common/SearchSection"
import Card from "../shared/Card"
import ChatModal from "../components/ChatModal"


const Dashboard = () => {
  return (
    <div>
     <SearchSection searchtitle='Dashboard'/>
     <Card/>
    <div className="bg-white   ">
    <ChatModal/>
    </div>
    </div>
  )
}

export default Dashboard
