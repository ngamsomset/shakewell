import React from 'react'
import logo from './logo.png'
import style from './Blog.module.css'

const Blog = ({ title, created, excerpt }) => {
  return (
    <div>
      <div className={style.card}>
        <div className={style.imgcontainer}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={style.contentwrap}>
          <h2>{title}</h2>
          <p>Published: {created.slice(0, 10)}</p>
          <p>{excerpt}</p>
          <p>Author: John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
