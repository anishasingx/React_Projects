import React from 'react'
import styles from '../assets/css/Sidebar.module.css'

const Sidebar = ({notify}) => {
  return (
    <div className={styles.side} onClick={()=>notify("I AM IN SIDEBAR")}>Sidebar</div>
    
  )
}

export default Sidebar
