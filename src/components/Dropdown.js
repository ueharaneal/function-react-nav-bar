import { useState, useEffect, useRef  } from "react";
import {GoChevronDown} from 'react-icons/go'
import Panel from "./Panel"
function Dropdown({ options, value, onChange }) {
  const [isOpened, setIsOpened] = useState(false);
  const divEl = useRef();
  
  useEffect(()=>{ 
    const handler =(event)=>{
        if(!divEl.current){
            return;
        }
        if(!divEl.current.contains(event.target)){
            setIsOpened(false)
        }
    }
    document.addEventListener("click", handler, true)

    return ()=>{
        document.removeEventListener("click", handler)
    }
    
    
  },[])
  const handleClick = () => {
    setIsOpened((currentlyOpened) => !currentlyOpened);
  };
  const handleOptionClick = (option) => {
    setIsOpened(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 cursor-pointer rounded p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl}className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg"/>
      </Panel>
      {isOpened && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
