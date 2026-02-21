import React from 'react'
import styles from '../assets/css/Main.module.css'

const Main = ({notify}) => {
  return (
    <div className={styles.main} onClick={() => notify("I AM IN MAIN METHOD")}>Main</div>
  )
}

export default Main
