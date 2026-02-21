import React from 'react'
import styles from '../assets/css/Footer.module.css'

const Footer = ({notify}) => {
  return (
    <div className={styles.footer} onClick={()=> notify("I AM IN FOOTER")}>Footer</div>
  )
}

export default Footer
