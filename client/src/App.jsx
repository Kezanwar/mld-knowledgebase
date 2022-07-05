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
        .then((wpposts) => {
          axios
            .get(process.env.REACT_APP_GET_CATS)
            .then((wpcats) =>
              setWpData({ posts: wpposts.data, categories: wpcats.data })
            )
            .catch((err) => console.log(err.response))
        })
        .catch((err) => console.log(err.response))
    }
  }, [wpData])

  if (!wpData)
    return (
      <div className="loading-screen">
        welcome to My Local Deli Knowledgebase
      </div>
    )

  let { posts, categories } = wpData

  categories = categories.sort(
    (a, b) => a.acf.category_order - b.acf.category_order
  )

  const filteredPostsByCategories = categories
    .map((category) => {
      if (category.name === 'Uncategorized') return null
      else
        return {
          title: category.name,
          description: category.description,
          posts: posts
            .filter((post) => post.categories[0] === category.id)
            .reverse(),
        }
    })
    .filter((el) => el !== null)

  // console.log(filteredPostsByCategories)

  return (
    <ContextProvider filteredPostsByCategories={filteredPostsByCategories}>
      <div className="App">
        <Header toggleMobNav={toggleMobNav} />
        <section className="mainAndSideWrapper">
          <Sidebar mobNav={mobNav} />
          <Main />
        </section>
      </div>
    </ContextProvider>
  )
}

export default App
