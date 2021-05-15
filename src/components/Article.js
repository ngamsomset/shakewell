import React from 'react'
import { useParams } from 'react-router'
import logo from './logo.png'

const Article = (props) => {
  const { id } = useParams()

  return (
    <div>
      <img src={logo} alt="logo"></img>
      <h1>Contact {id}</h1>
    </div>
  )
}

export default Article
