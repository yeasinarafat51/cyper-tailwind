import Dashboard from "./Pages/Dashboard";
import Map from "./components/Map";
import Textarea from "./components/Textarea";

import Navbar from "./shared/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Incidents from "./Pages/Incidents";
import Incedent from "./common/Incedent";
import ItemList from "./common/NewIncident";
import Locations from "./Pages/Locations";

function App() {
  return (
    <>
      <div className="  bg-[#E4E4E7] ">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/incident" element={<Incedent />} />
            <Route path="/itemlist" element={<ItemList />} />
            <Route path="/textarea" element={<Textarea />} />
            <Route path="/map" element={<Map />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
