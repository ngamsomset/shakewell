import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import BlogList from './components/BlogList'

function App() {
  const [loading, setIsloading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const res = await fetch(
        'https://api.shakewell.agency/api/v1/posts/?per_page=10'
      )

      if (res.ok) {
        const data = await res.json()
        setData(data.data.data)
        setIsloading(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Home />
      {!loading ? <BlogList data={data} /> : 'loading...'}
      <Footer />
    </div>
  )
}

export default App
