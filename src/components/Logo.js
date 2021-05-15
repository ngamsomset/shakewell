import React from 'react'
import logo from './logo.png'
import style from './Logo.module.css'

const Logo = () => {
  return (
    <div className={style.image}>
      <img src={logo} alt="logo"></img>
    </div>
  )
}

export default Logo
