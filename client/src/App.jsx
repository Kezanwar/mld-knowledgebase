import './App.scss'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import axios from 'axios'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ContextProvider from './components/ContextProvider'

function App() {
  const [wpData, setWpData] = useState(null)
  const [mobNav, setMobNav] = useState(false)

  const toggleMobNav = () => {
    setMobNav((prev) => !prev)
  }

  useEffect(() => {
    if (!wpData) {
      axios
        .get(process.env.REACT_APP_GET_POSTS)
        .then((res) => {
          setWpData(res.data)
        })
        .catch((err) => console.log(err.response))
    }
  }, [wpData])

  if (!wpData)
    return (
      <div className="loading-screen">
        welcome to my local deli knowledgebase
      </div>
    )
  else
    return (
      <ContextProvider filteredPostsByCategories={wpData}>
        <div className="App">
          <Header toggleMobNav={toggleMobNav} />
          <section className="mainAndSideWrapper">
            <Sidebar toggleMobNav={toggleMobNav} mobNav={mobNav} />
            <Main />
          </section>
        </div>
      </ContextProvider>
    )
}

export default App
