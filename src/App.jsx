

import Incedent from './common/Incedent'
import Card from './shared/Card'

function App() {
 

  return (
   <>
  <div className='bg-slate-500'>
  <div className='mx-4 my-8 font-onest grid grid-cols-4'>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </div>
   <Incedent/>
  </div>
  </>
    
  )
}

export default App
