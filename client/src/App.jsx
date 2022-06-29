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

  console.log(posts)

  return (
    <div className="App">
      <Header />
      <section className="mainAndSideWrapper">
        <Sidebar />
        <Main posts={posts} />
      </section>
    </div>
  )
}

export default App
