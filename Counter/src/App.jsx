import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

    // let counter=15;
    const addValue=()=>{
      
      
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      //       these repetations never update values on each increment
      //use the written below method
      setCounter((counter)=>counter+1)// First counter gets the previous state value and then add then increment
      setCounter((counter)=>counter+1)
      console.log("clicked",counter);
      //use state method to update the value

      // can also use normal variable method to update the value

      // counter=counter+1;
      // setCounter (counter);
    }
    const deleteValue=()=>{
      // setCounter(counter-1);
      // setCounter(counter-1);
      // setCounter(counter-1);
      //these repetations never update values on each decrement
      //use the written below method
      setCounter((counter)=>counter-1)// First counter gets the previous state value and then add then decrement
      setCounter((counter)=>counter-1)
      
      console.log("clicked",counter);
    }
return (
    <>
    <h1>Vite + React</h1>
    <h2>Counter App: {counter}</h2>
    <button
    onClick={addValue}>
      Add Value{counter}</button>
    <button
    onClick={deleteValue}>Delete Value{counter}</button>
    </>
  )
}

export default App
