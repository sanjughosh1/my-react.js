import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [color, setColor] = useState("olive")//for oneclick color changer
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CarectorAllowed, setCarectorAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordRef = useRef(null)  


  // usecollback(funnction,[want to pass])

  const passwordGenerater = useCallback(()=> {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed) str += "123456789"
    if(CarectorAllowed) str += "!@#$%^&*(~+-*/"

    for (let i = 1; i <=length; i++) {
      let char  = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
        
    }
      setPassword(pass)

  }  ,[length,NumberAllowed,CarectorAllowed,setPassword])


  //useEffect((callback)) hook 

  useEffect(() => {
    passwordGenerater()
  },[length,NumberAllowed,CarectorAllowed,passwordGenerater])


  const copyPasswordToClipbord = useCallback(() => {
      passwordRef.current.select()
      // passwordRef.current.setSelectionRange(0,5) //for selecting range
    window.navigator.clipboard.writeText(Password) //for navigation (only for windos in backend workes defrentle)
  },[Password])

  return (
  
      <div 
      className='w-full flex justify-center h-screen duration-200' style={{backgroundColor: color}}> 
        <div className="w-full fixed justify-center max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className='text-white text-center my-3'>password generater</h1>
          <div  className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            className="outline-none w-full py-1 px-3"
            value={Password}
            placeholder='Password'
            ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipbord} 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
          </div>
          <div  className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
           <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
             <label>Length: {length}</label>
            </div>
            <div  className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              />
               <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={CarectorAllowed}
              id="characterInput"
              onChange={() => {
                  setCarectorAllowed((prev) => !prev )
              }}
             />
             <label htmlFor="characterInput">Characters</label>
            </div>
          </div>  
        </div>     

        { /* onclick color chenger */ }      
        
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center bg-white px-3 py-2 rounded-xl gap-3 shadow-xl'>
            <button
            onClick={() => setColor("green")}
            className='outline-none px-3 py-2 rounded-xl text-white'
            style={{backgroundColor:"green"}}>green</button>
             <button 
             onClick={() => setColor("yellow")}
             className='outline-none px-3 py-2 rounded-xl text-white'
            style={{backgroundColor:"yellow"}}>yellow</button>
             <button
             onClick={() => setColor("red")}
             className='outline-none px-3 py-2 rounded-xl text-white'
            style={{backgroundColor:"red"}}>red</button>
             <button 
             onClick={() => setColor("blue")}
             className='outline-none px-3 py-2 rounded-xl text-white'
            style={{backgroundColor:"blue"}}>blue</button>
             <button
              onClick={() => setColor("orange")}
             className='outline-none px-3 py-2 rounded-xl text-white'
            style={{backgroundColor:"orange"}}>orange</button>
             <button 
             onClick={() => setColor("black")}
             className='outline-none px-3 py-2 rounded-xl text-white'
            style={{backgroundColor:"black"}}>black</button> 
            <button
            onClick={() => setColor("purple")}
            className='outline-none px-3 py-2 rounded-xl text-white'
            style={{backgroundColor:"purple"}}>purple</button>
          </div>
        </div>
      </div>    
  )
}

export default App
