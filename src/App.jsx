

import ItemList from './common/Exam'
import Incedent from './common/Incedent'

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
   
   <ItemList/>
  </div>
  </>
    
  )
}

export default App
