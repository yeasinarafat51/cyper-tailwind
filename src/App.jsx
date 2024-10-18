/* eslint-disable no-undef */

import Divider from "./common/Divider"


// import Button from './common/Button';
// import ItemList from './common/Exam'
// import Incedent from './common/Incedent'
import SearchSection from './common/SearchSection';
// import ChatModal from './components/ChatModal';
import Dashboard from './Pages/Dashboard';
import Map from "./components/Map";
import Textarea from "./components/Textarea";

import User from './components/User';

// import Card from './shared/Card'
import Navbar from './shared/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Incidents from "./Pages/Incidents";
import Incedent from "./common/Incedent";
import ItemList from "./common/NewIncident";

function App() {
 

  return (
   <>
  <div className='  bg-[#E4E4E7] '>
  <Router>
      <Navbar />
     
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/incidents" element={<Incidents/>} />
        <Route path="/incident" element={<Incedent/>} />
        <Route path="/itemlist" element={<ItemList/>} />
        <Route path="/textarea" element={<Textarea/>} />
        <Route path="/map" element={<Map/>} />

        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
    {/* <SearchSection searchtitle="Content"/> */}
  {/* <div className='mx-4 my-8 font-onest grid grid-cols-3'>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </div>
   <Incedent/>
   
   <ItemList/> */}
   
   {/* <ChatModal/> */}
   {/* <Divider searchtitle='New Incident'/> */}
   {/* <Button  className='bg-[#F26922]'>get stared</Button> */}
   {/* <Textarea/> */}
   {/* <Map/> */}
  </div>
  </>
    
  )
}

export default App
