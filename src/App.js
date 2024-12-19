import { useState } from 'react';import './App.css';
import Pallete from './component/palette';

function App() {
  let [count, setCount] = useState(0)
  let[colors, setColors] = useState(
    [
      {palleteColor : [
        { id: Math.random(), color : getRandomColor(), lock: false},
        { id: Math.random(), color : getRandomColor(), lock: false},
        { id: Math.random(), color : getRandomColor(), lock: false},
        { id: Math.random(), color : getRandomColor(), lock: false},
        { id: Math.random(), color : getRandomColor(), lock: false}
      ]},
  ]
)
console.log(colors);

  return (
    <div className="App" onKeyDown={changePalleteColor} tabIndex={0}> 
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        {
        colors[count].palleteColor.map((element) => {
          
          return <Pallete key={element.id} color={element.color} singleElement = {element} setColors = {setColors} colors = {colors}/>
        })}
      </div>
    </div>
  );
  function getRandomColor() {
    const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomHex;
  }
  function changePalleteColor() {
    setColors([...colors, {
      palleteColor: colors[count].palleteColor.map((element)=>{
        if(element.lock === true) {
          return element
        }
        else {
          return {id: Math.random(), color: getRandomColor(), lock: false}
        }
      })
    }])
    setCount(++count)
  }

}

export default App;
