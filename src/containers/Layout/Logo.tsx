import React from 'react'
import LogoLight from 'assets/wave-light.png'
import styles from './Layout.module.scss'

const Logo = () => (
  <div className={styles.logo}>
    <img src={LogoLight} alt="logo" />
    <h1>React Admin</h1>
  </div>
)

export default Logo
