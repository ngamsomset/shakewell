import React from 'react'
import logo from './logo.png'
import style from './Blog.module.css'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { IconContext } from 'react-icons'

const Blog = ({ title, created, excerpt }) => {
  const myDate = new Date(created)
  const output =
    myDate.getDate() + '/' + myDate.getMonth() + '/' + myDate.getFullYear()

  return (
    <div>
      <div className={style.card}>
        <div className={style.imgcontainer}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={style.contentwrap}>
          <h2>
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle', marginLeft: '10px' } }}
            >
              {title} <HiOutlineArrowRight />
            </IconContext.Provider>
          </h2>
          <p>Published: {output}</p>
          <p>{excerpt}</p>
          <p>Author: John Doe</p>
          <div className={style.hash}>
            <span>#design</span>
            <span>#frontend</span>
            <span>#backend</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
