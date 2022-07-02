const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const axios = require('axios')
const cors = require('cors')

const app = express()

// init middleware
// allows us to get data within bodies of req/res
app.use(cors(), express.json({ extended: false }))

app.get('/', (req, res) => res.send('mld knowledgebase api running'))

// // define routes

// app.use('/api/posts', require('./routes/api/posts'))

app.get('/api/posts', (req, res) => {
  axios
    .get(process.env.GET_POSTS_URL)
    .then((response) => res.send(response.data))
    .catch((err) => console.log('hello', err))
})

app.get('/api/cats', (req, res) => {
  axios
    .get(process.env.GET_CATS_URL)
    .then((response) => res.send(response.data))
    .catch((err) => console.log('hello', err))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
