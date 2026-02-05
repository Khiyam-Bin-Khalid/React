import UserContextProvider from './context/userContextProvider';
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  

  return (
    // UserContextProvider component is used to wrap the components that need to access the context value. 
    // It provides the context value to the components that need it.
    //  The context value is an object that contains the user state and the setUser function to update the user state.
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
