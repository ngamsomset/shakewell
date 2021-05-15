import React from 'react'
import style from './Bloglist.module.css'
import Blog from './Blog'
import { Link } from 'react-router-dom'

const BlogList = ({ data }) => {
  return (
    <div className={style.blog}>
      {data.map((blog, index) => (
        <Link key={blog.id} to={`/article/${index}`}>
          <Blog
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            created={blog.created_at}
          />
        </Link>
      ))}
    </div>
  )
}

export default BlogList
