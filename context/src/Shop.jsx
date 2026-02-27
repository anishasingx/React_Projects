import React from 'react'
 import {Data} from './Data'
import  { useContext } from 'react'

const Shop = () => {
  let user = useContext(Data);
  return (
    <div>
      From Shop Name : {user.name} 
      Roll : {user.roll}
      Course : {user.course}
    </div>
  )
}
export default Shop
