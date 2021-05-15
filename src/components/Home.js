import React from 'react'
import Logo from './Logo'
import style from './Home.module.css'

const Home = () => {
  return (
    <>
      <div>
        <Logo />
      </div>
      <div className={style.mainheading}>
        <h1>A group of devs, making internet things</h1>
      </div>
    </>
  )
}

export default Home
