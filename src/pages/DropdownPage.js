import { useState, useEffect  } from 'react'
import Dropdown from '../components/Dropdown'

function DropdownPage() {
  const [selected, setSelected] = useState(null);


  const handleSelect = (option)=>{
    setSelected(option)
  }

  const options = [
    {
        label:"Red",
        value:'red'
    },
    {
        label:'Blue',
        value:'blue'
    },
    {
        label:'Green',
        value:'green'
    }
]
  return(
    <div>
      <Dropdown options ={options} value={selected} onChange={handleSelect} />
    </div>
  )
}

export default DropdownPage;  