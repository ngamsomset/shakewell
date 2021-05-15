import React from 'react'
import style from './Bloglist.module.css'
import logo from './logo.png'

const BlogList = (props) => {
  return (
    <div className={style.blog}>
      <div className={style.card}>
        <div className={style.imgcontainer}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={style.contentwrap}>
          <h2>{props.data.title}</h2>
          <p>Published: {props.data.created_at.slice(0, 10)}</p>
          <p>{props.data.excerpt}</p>
          <p>Author: John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default BlogList
