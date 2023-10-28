import {useState} from 'react'
function Dropdown({options, selected, onSelect}) {
    const [isOpened, setIsOpened] = useState(false)
    
    const handleClick=()=>{
        setIsOpened((currentlyOpened)=>!currentlyOpened)
    }
    const handleOptionClick=(option)=>{
        setIsOpened(false);
        onSelect(option)
        
    }

    const renderedOptions = options.map((option)=>{
        return(
            <div key={option.value} onClick={()=>handleOptionClick(option)}>{option.label}</div>
        )
    })
    
    
    

    return (
        <div>
            <div onClick={handleClick}>{selected?.label||'Select...'}</div>
            {isOpened&&<div>{renderedOptions}</div>}
        </div>
  )
}

export default Dropdown;
