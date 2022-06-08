import logo from './logo.svg';
import './App.css';
import PartListItem from './Components/PartListItem.js';
import { useState, useEffect } from 'react';

function App() {

  const [partsList, setPartsList] = useState([])

  useEffect(()=>{
    addParts(["Part One", "Part Two","Part Three", "Part Four"])    
  }, [])

  function addPart(newPart){
    // Create temporary array and put the current parts in it
    var temp = []
    partsList.forEach(part =>{
      temp.push(part)
    })

    // Add the new part to the array
    temp.push(newPart)

    // Put the updated array in the state variable
    setPartsList(temp)
  }
  function addParts(newParts){
    // Create temporary array and put the current parts in it
    var temp = []
    partsList.forEach(part =>{
      temp.push(part)
    })

    newParts.forEach(newPart =>{
      temp.push(newPart)
    })  

    // Put the updated array in the state variable
    setPartsList(temp)
  }
  

  return (
    <div className="App">
      <div className='topBar'>
        <div className='logoContainer'>
          <div className='logoCircle'></div>          
            <div className='mainTitle'>ACORN</div>
            <div className='secondaryTitle'>Testing Framework</div>          
        </div>
        <div className='topBarDivider'>
          <div className='topBarLine'></div>
        </div>
      </div>
      <div className='sideMenu'>
        <div className='partsList'>
          <div className='partsListTitle'>
            Parts List
          </div>
          <div className='topBarLine'></div>
          {partsList.map(part=>(
            <PartListItem name={part}></PartListItem>
          ))}
        </div>
        <div className='buttonBox'>
          <button>X Ray</button>
          <button>Highlight</button>
        </div>
      </div>
      <div className='displaySection'>
        <div className='canvasPlaceHolder'></div>
      </div>
    </div>
  );
}

export default App;
