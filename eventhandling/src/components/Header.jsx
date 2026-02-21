import React from 'react'
import styles from '../assets/css/Header.module.css'


const Header = ({notify}) => {
  
  return (
    <div>
      
      <div className={`${styles.head} text-primary display-1 text-white`} onClick={()=>notify("I AM IN HEADER")}>Header</div>
      
    </div>
  )
}

export default Header
