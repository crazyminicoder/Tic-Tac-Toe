import { useState, useEffect } from 'react';
import './App.css';
import Squares from './Squares';

function App() {
  
let initialState=["","","","","","","","",""];
const[currentState, setCurrentState]=useState([initialState])
const[x, setX]=useState(true)
const[xScore, setXScore]=useState(0);
const[oScore, setOScore]=useState(0);
const[clickCounter, setClickCounter]=useState(0)

const clickHandler = (i)=>{
  let currentArray=Array.from(currentState);
  currentArray[i]= x ? "X" : "O";
  setCurrentState(currentArray)
  setX(!x)
  setClickCounter((clickCounter) => clickCounter + 1)
}
console.log(clickCounter)

const checkForRow = ()=>{
  const arrangement=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
  ];
  for(let i = 0; i < arrangement.length; i++){
    const[a,b,c] = arrangement[i]
    if(currentState[a] && currentState[a] === currentState[b] && currentState[a] === currentState[c]){
      return currentState[a];
    }
  }
  return null;
}

const checkForColumn = () =>{
  const columnArrangement =[
    [0,3,6],
    [1,4,7],
    [2,5,8],
  ];
  for(let i=0; i < columnArrangement.length; i++){
    const[a,b,c] = columnArrangement[i]
    if(currentState[a] && currentState[a] === currentState[b] && currentState[a] === currentState[c]){
      return currentState[a];
  }
}
return null;
}

const checkForDiagnols = () =>{
  const diagnolArrangement = [
    [0,4,8],
    [2,4,6],
  ];
  for(let i = 0; i<diagnolArrangement.length; i++){
    const[a,b,c]=diagnolArrangement[i]
    if(currentState[a] && currentState[a] === currentState[b] && currentState[a] === currentState[c]){
      return currentState[a];
  }
}
return null;
}



const clearGame = () =>{
  setCurrentState(initialState)
}

useEffect(()=>{
  const timer = setInterval(()=>{
    let row=checkForRow();
    let column=checkForColumn();
    let diagnol=checkForDiagnols();
    if(row){
      if(row === "X"){
        setXScore((xScore) => xScore + 1)
      }
      if(row === "O"){
        setOScore((oScore) => oScore + 1)
      }
      alert(`Ta da ! ${row} won the Game !`);
      clearGame()
      setClickCounter(0)
    }
    if(column){
      if(column === "X"){
        setXScore((xScore) => xScore + 1)
      }
       if(column === "O"){
        setOScore((oScore) => oScore + 1)
      }
      alert(`Ta da ! ${column} won the Game !`);
      clearGame()
      setClickCounter(0)
    }
    if(diagnol){
      if(diagnol === "X"){
        setXScore((xScore) => xScore + 1)
      }
       if(diagnol === "O"){
        setOScore((oScore) => oScore + 1)
      }
      alert(`Ta da ! ${diagnol} won the Game !`);
      clearGame()
      setClickCounter(0)
    }
    if(clickCounter === 9 && !row && !column && !diagnol){
      alert("The game is a draw");
      clearGame()
      setClickCounter(0)
    }
   
  },100)
  return() => clearInterval(timer)
},[currentState, checkForColumn, checkForDiagnols, checkForRow, clickCounter,clearGame])

  return (
    <div className="App">
      <div className='title'>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className='score_board'>
      <h1 id='X'>X : {xScore}</h1>
      <h1 id='O'>O : {oScore}</h1>
      </div>
      <div className='game_board'>
        <Squares value={currentState[0]} onClick={()=> clickHandler(0) }/>
        <Squares value={currentState[1]} onClick={()=> clickHandler(1) }/>
        <Squares value={currentState[2]} onClick={()=> clickHandler(2)  }/>
        <Squares value={currentState[3]} onClick={()=> clickHandler(3)  }/>
        <Squares value={currentState[4]} onClick={()=> clickHandler(4)  }/>
        <Squares value={currentState[5]} onClick={()=> clickHandler(5)  }/>
        <Squares value={currentState[6]} onClick={()=> clickHandler(6)  }/>
        <Squares value={currentState[7]} onClick={()=> clickHandler(7)  }/>
        <Squares value={currentState[8]} onClick={()=> clickHandler(8)  }/>
      </div>
    </div>
  );
}

export default App;
