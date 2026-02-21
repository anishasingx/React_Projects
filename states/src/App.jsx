import React from 'react'
import { useState } from 'react'
import Abcd from './Abcd';


const App = () => {

  const [name,setName] = useState("");
  let change = (e) =>{
    setName(e.target.value);
    
  }
  let clear = () =>{
    setName("");
  }
 
  return (
    <div>
      <h1 style={{fontSize:"100px"}}>Hello {name}</h1>
      <input type="text" onChange={(e) => change(e)} value={name} />
      <button onClick={clear}>Clear Text</button>
      <Abcd nameset={setName}></Abcd>
    </div>
  )
}

export default App
