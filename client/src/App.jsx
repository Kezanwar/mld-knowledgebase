import './App.scss'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import axios from 'axios'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    if (!posts) {
      axios
        .get(process.env.REACT_APP_GET_POSTS)
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err.response))
    }
  }, [])

  const [mobNav, setMobNav] = useState(false)

  const toggleMobNav = () => {
    setMobNav((prev) => !prev)
  }

  console.log(posts)

  if (!posts) return <div>loading</div>
  return (
    <div className="App">
      <Header toggleMobNav={toggleMobNav} />
      <section className="mainAndSideWrapper">
        <Sidebar mobNav={mobNav} />
        <Main posts={posts} />
      </section>
    </div>
  )
}

export default App
