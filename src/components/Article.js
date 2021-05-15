import React from 'react'
import { useParams } from 'react-router'

const Article = ({ data }) => {
  const { id } = useParams()

  function createMarkUp(id) {
    return { __html: data[id].body }
  }

  return (
    <section>
      <h2>{data[id].title}</h2>
      <div dangerouslySetInnerHTML={createMarkUp(id)} />
    </section>
  )
}

export default Article
