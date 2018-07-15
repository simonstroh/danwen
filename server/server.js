const express = require('express')
const path = require('path')
const retrieve = require('../data/retriever')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.get('/urbanFiction/images', (req, res) => {
  retrieve(path.join(__dirname, '../data/images.csv'), (err, data) => {
    if (err) console.error(err)
    else res.send(data.toString())
  })
})
app.listen(3009)
