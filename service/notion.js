const dotenv = require('dotenv').config()
const { Client } = require("@notionhq/client")
const { response } = require('express')

// Initializing a client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })

// Get database ID
const databaseID = process.env.NOTION_DATABASE_ID

//get all pages
const getPages = async () => {
    const payload = {
        path: `databases/${databaseID}/query`,
        method: 'POST',
    }

    const { results } = await notion.request(payload)
    // console.log(results);

    const posts = results.map((page) => {
        return {
            id: page.id,
            cover: page.cover.external.url,
            title: page.properties.Titulo.title[0].text.content,
        }
    }) 
    
    return posts
}

//export
module.exports = getPages

