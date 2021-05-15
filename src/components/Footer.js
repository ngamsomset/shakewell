import React from 'react'
import logo from './logo.png'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        Created By <img src={logo} alt="logo"></img> Shakewell Agency
      </p>
    </footer>
  )
}

export default Footer
