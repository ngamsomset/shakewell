import React from 'react'
import { useParams } from 'react-router'
import style from './Article.module.css'

const Article = ({ data }) => {
  const { id } = useParams()

  function createMarkUp(id) {
    return { __html: data[id].body }
  }

  return (
    <div>
      <h2 className={style.heading}>{data[id].title}</h2>
      <section className={style.section}>
        <div dangerouslySetInnerHTML={createMarkUp(id)} />
      </section>
    </div>
  )
}

export default Article
