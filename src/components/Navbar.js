import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <span></span>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/">Work</a>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
