import { useState } from 'react'
import './App.css'

function App() {

  let [counter ,setCounter] = useState(15)//setCounter can be anething

  // let countet = 15

  const addValue = () => {
    console.log("clicked",counter);
    if(counter < 20){
    counter = counter + 1;
    }
   setCounter(counter)
  }

  const RemoveValue = () =>{
    console.log("clicked",counter);
    if(counter>0){
     counter =  counter - 1
    }
    setCounter(counter)
  }
  return (
    <>
    <h1>babel</h1>
    <h2>count value</h2>
    <button onClick={addValue}> add value : {counter}</button>
    <button onClick={RemoveValue}> remove value : {counter}</button>
    <h1>sanju ghosh : {counter}</h1>
    </>
  )
}

export default App
