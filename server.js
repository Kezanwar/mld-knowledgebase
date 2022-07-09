const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const axios = require('axios')
const cors = require('cors')
const path = require('path')
const app = express()

// init middleware
// allows us to get data within bodies of req/res
app.use(cors(), express.json({ extended: false }))

// app.get('/', (req, res) => res.send('mld knowledgebase api running'))

app.get('/api/posts', async (req, res) => {
  try {
    const wpPosts = await axios.get(`${process.env.GET_POSTS_URL}?per_page=100`)

    const wpCats = await axios.get(process.env.GET_CATS_URL)

    let posts = wpPosts.data

    let categories = wpCats.data

    categories = categories.sort((a, b) => a.acf.category_order - b.acf.category_order)

    const filteredPostsByCategories = categories
      .map((category) => {
        if (category.name === 'Uncategorized') return null
        else
          return {
            title: category.name,
            description: category.description,
            posts: posts
              .filter((post) => post.categories[0] === category.id)
              .sort((a, b) => a.acf.post_order - b.acf.post_order),
          }
      })
      .filter((el) => el !== null)

    res.send(filteredPostsByCategories)
  } catch (error) {
    res.status(500).send(error?.reponse?.data)
  }
})

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.static('public'))

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
