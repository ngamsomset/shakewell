import React from 'react'
import logo from './logo.png'
import style from './Blog.module.css'
import { HiChevronRight } from 'react-icons/hi'
import { IconContext } from 'react-icons'

const Blog = ({ title, created, excerpt }) => {
  var myDate = new Date(created)
  var output =
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
              value={{ style: { verticalAlign: 'middle' } }}
            >
              {title} <HiChevronRight />
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
