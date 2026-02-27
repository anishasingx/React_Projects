import React, { useState } from 'react'
 import {Data} from './Data'
import Home from './Home'
import Shop from './Shop'

const App = () => {
  let user = {name:"Anisha", roll:101,course:"BCA"}

  return(
   <Data.Provider value={user}>
      <Home></Home>
      <Shop></Shop>
   </Data.Provider>
  )
  
}

export default App
