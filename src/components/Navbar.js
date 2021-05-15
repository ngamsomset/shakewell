import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <span></span>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
