import React from 'react'
import { useParams } from 'react-router'

const Article = ({ data }) => {
  const { id } = useParams()

  function createMarkUp(id) {
    return { __html: data[id].body }
  }

  return <div dangerouslySetInnerHTML={createMarkUp(id)}></div>
}

export default Article
