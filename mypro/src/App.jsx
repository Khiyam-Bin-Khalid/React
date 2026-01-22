import Hi from "./new"
import './App.css'

function App() {
  let username="Khiyam Bin Khalid"
  

  return (
    // <></> these tags are called fragments that help to return multiple elements without adding extra nodes to the DOM
    //these are useful when you want to group a list of children without adding extra nodes to the DOM
    <>
   <Hi/>
   {/* {username} shows the value of username variable */}
   {username}
   <p>This is a paragraph</p>
    <h1>This is an h1 tag</h1>
   </>
   //its impossible to return two elements side by side without wrapping them in a parent element like div or fragment
  )
}
 
export default App
 