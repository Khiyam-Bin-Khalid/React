import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");


    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username, password});
    }
    return(
        <div>
            <h2>Login</h2>

            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="UserName"
            className="bg-gray-600 text-white p-2 rounded m-2 border-black"/>
{"   "}
            <input type="Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password "
            className="bg-gray-600 text-white p-2 rounded m-2"/>
            
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded m-2">Submit</button>
        </div>
    )
}
export default Login;