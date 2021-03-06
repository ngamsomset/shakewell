import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Article from './components/Article'
import Work from './components/Work'

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
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            {!loading ? <BlogList data={data} /> : 'loading...'}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/article/:id">
            {!loading ? <Article data={data} /> : 'loading...'}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
