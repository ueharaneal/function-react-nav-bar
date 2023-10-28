import { useState } from 'react'
import Dropdown from './components/Dropdown'

function App() {
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
      <Dropdown options ={options} selected={selected} onSelect={handleSelect} />
    </div>
  )
}

export default App;  