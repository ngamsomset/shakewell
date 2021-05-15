import React from 'react'
import style from './Bloglist.module.css'
import Blog from './Blog'

const BlogList = ({ data }) => {
  return (
    <div className={style.blog}>
      {data.map((blog) => (
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
