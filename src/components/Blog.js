import React from 'react'
import logo from './logo.png'
import style from './Blog.module.css'

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
          <h2>{title}</h2>
          <p>Published: {output}</p>
          <p>{excerpt}</p>
          <p>Author: John Doe</p>
          <div>
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
