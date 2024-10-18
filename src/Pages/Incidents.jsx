import Searchincident from "../common/SearchIncident"
import Card from "../shared/Card"


const Incidents = () => {
  return (
    <div>
      <Searchincident searchtitle='Incidents' searchname='Home - Incidents'/>
      <Card/>
    </div>
  )
}

export default Incidents
