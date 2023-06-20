import React , {useState} from 'react';
import Dropdown from '../components/Dropdown';
function DropdownPage() {
  const [selection , setSelection] = useState(null);
  const options = [
    {
      
      label: 'Red',
      value: 'red'
    },
    {
     
      label: 'Blue',
      value: 'blue'
    },
    {
      
      label: 'Green',
      value: 'green'
    }
  ]

  const handleSelect = (option) => {
    setSelection(option);
  }
  return (
    <div className="App">
     <Dropdown options={options} onChange={handleSelect} value={selection}/> 
    </div>
  );
}

export default DropdownPage;