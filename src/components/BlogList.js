import React from 'react'
import style from './Bloglist.module.css'
import Blog from './Blog'

const BlogList = (props) => {
  return (
    <div className={style.blog}>
      {props.data.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          excerpt={blog.excerpt}
          created={blog.created_at}
        />
      ))}
    </div>
  )
}

export default BlogList
