const express = require('express')
const getPages = require('./service/notion')
const PORT = process.env.PORT || 5000

const app = express()

// public directori
app.use(express.static('public'))

app.get('/blog', async (req, res) => {
    const posts = await getPages()
    res.json(posts)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))



