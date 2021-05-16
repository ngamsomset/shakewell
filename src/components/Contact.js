import React from 'react'
import logo from './logo.png'
import style from './Contact.module.css'

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <img src={logo} alt="logo"></img>
        <h1>Contact</h1>
      </div>
    </div>
  )
}

export default Contact
