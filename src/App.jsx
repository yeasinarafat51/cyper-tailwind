

import Incedent from './common/Incedent'
import NewIncident from './common/NewIncident'
import Card from './shared/Card'

function App() {
 

  return (
   <>
  <div className='bg-slate-500 p-8'>
  <div className='mx-4 my-8 font-onest grid grid-cols-3'>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </div>
   <Incedent/>
   <NewIncident />
  </div>
  </>
    
  )
}

export default App
