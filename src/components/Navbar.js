import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <span></span>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
