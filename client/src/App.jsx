import './App.scss'
import WPAPI from 'wpapi'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import axios from 'axios'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
const wp = new WPAPI({
  endpoint: process.env.REACT_APP_ENDPOINT,
})

function App() {
  useEffect(() => {
    wp.posts()
      .then((res) => console.log('success', res))
      .catch((err) => console.log('error', err))
    // axios
    //   .get(process.env.REACT_APP_POST_ENDPOINT)
    //   .then((res) => console.log('success', res.data))
    //   .catch((err) => console.log(err.response))
    //   .catch((err) => console.log('error', err))
  }, [])

  return (
    <div className="App">
      <Header />
      <section className="mainAndSideWrapper">
        <Sidebar />
        <Main />
      </section>
    </div>
  )
}

export default App
