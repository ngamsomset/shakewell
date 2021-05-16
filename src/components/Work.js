import React from 'react'
import logo from './logo.png'
import style from './Work.module.css'

const Work = () => {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <img src={logo} alt="logo"></img>
        <h1>Work</h1>
      </div>
    </div>
  )
}

export default Work
