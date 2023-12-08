import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src='https://kpm.metu.edu.tr/wp-content/uploads/2022/03/patikaLogo.png' alt='patikaLogo' />
        <div className={styles.line} />
    </header>
  )
}

export default Header
