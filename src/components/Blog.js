import React from 'react'
import logo from './logo.png'
import style from './Blog.module.css'

const Blog = (props) => {
  return (
    <div>
      <div className={style.card}>
        <div className={style.imgcontainer}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={style.contentwrap}>
          <h2>{props.title}</h2>
          <p>Published: {props.created.slice(0, 10)}</p>
          <p>{props.excerpt}</p>
          <p>Author: John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
