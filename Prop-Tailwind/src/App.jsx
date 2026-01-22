// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/card.jsx'
import './App.css'

function App() {
  let Obj={
    name: "Khiyam",
    age: 21,
    city: "Kotli"
  }
  let newArr = [1,2,3,4,5];


  return (
    <>
     <h1 className="bg-green-500 text-gray p-4 rounded-lg">React+Tailwind</h1>
    <Card userName="Khiyam Bin Khalid " obj={Obj} Arr={newArr} btnText="Click Me"/> // Passing obj and Arr as props to Card component
    <Card userName="Khiyam" btnText="Click Me"/>
    </>
  )
}

export default App
