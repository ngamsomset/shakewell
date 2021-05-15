import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import BlogList from './components/BlogList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BlogList />
      <Footer />
    </div>
  )
}

export default App
