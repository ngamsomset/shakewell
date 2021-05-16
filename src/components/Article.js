import React from 'react'
import { useParams } from 'react-router'
import style from './Article.module.css'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

const Article = ({ data }) => {
  const { id } = useParams()

  function createMarkUp(id) {
    return { __html: data[id].body }
  }

  return (
    <div className={style.article}>
      <h2 className={style.heading}>{data[id].title}</h2>
      <div>
        <IconContext.Provider
          value={{
            style: {
              color: '#fff',
              fontSize: '3rem',
              display: 'flex',
              marginLeft: '3rem',
              cursor: 'pointer',
            },
          }}
        >
          <Link to="/home">
            <HiOutlineArrowCircleLeft />
          </Link>
        </IconContext.Provider>
      </div>
      <section className={style.section}>
        <div dangerouslySetInnerHTML={createMarkUp(id)} />
      </section>
    </div>
  )
}

export default Article
