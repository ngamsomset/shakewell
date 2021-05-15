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
          <h2>Test</h2>
          <p>Published:</p>
          <p>Test</p>
          <p>Author: </p>
        </div>
      </div>
    </div>
  )
}

export default BlogList
