import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook is use to add refrence to
  const passwordRef = useRef();

  //usecallback hook to memoize the function
  //it contains two parameters
  //first is the function to be memoized
  //second is the dependency array
  //whenever any value in the dependency array changes the function is recreated
  //EXAMPLE:
  //const generatePassword = useCallback(() => {
  //  // Generate password logic here
  //}, [length, numberAllowed, charAllowed, setPassword]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*?/><_-=s";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.select(); is used to select the text in the input field
    passwordRef.current?.setSelectionRange(0, 99); //is used to set the selection range of the text in the input field

    window.navigator.clipboard.writeText(password);//by using window.navigator.clipboard.writeText() method to copy the text to clipboard
  }, [password]);
  //useEffect hook contains two parameters
  //first is the function to be executed
  //second is the dependency array
  //whenever any value in the dependency array changes the function is executed

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);
  return (
    <>
      <h1 className="text-6xl font-bold text-center">Password Generator</h1>
      <h3 className="text-xl text-center ">Generate your once used password</h3>
      <div
        className="top-5 w-full max-w-md mx-auto shadow-md text-center text-2xl font-bold
      rounded-lg px-4 my-8 text-blue-200 bg-gray-700"
      >
        PassWord Generator
        <div className="flex shadow  rounded-lg overflow-hidde mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full  py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
            //passing refrence to the
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-slate-950 bg-black text-white px-3  rounded-xl shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
