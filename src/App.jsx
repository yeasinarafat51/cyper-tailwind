

import ItemList from './common/Exam'
import Incedent from './common/Incedent'
import Dashboard from './components/Dashboard';
import User from './components/User';

import Card from './shared/Card'
import Navbar from './shared/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
   <>
  <div className='bg-slate-600 p-8'>
  <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  <div className='mx-4 my-8 font-onest grid grid-cols-3'>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </div>
   <Incedent/>
   
   <ItemList/>
  </div>
  </>
    
  )
}

export default App
