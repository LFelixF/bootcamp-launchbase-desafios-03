const express = require("express")
const nunjucks = require("nunjucks")
const articles = require("./data")

const server = express()

server.listen(5000, () => {
    console.log("server is running!")
})

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.use(express.static("public"))

server.get("/", (req, res) => {
    const data = {
        avatar_url: "https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg",
        name: "Rocketseat",
        discription: "Nossa missão é capacitar pessoas que buscam se profissionalizar na programação independente do seu momento ou nível de conhecimento.",
        list: {
            name: "Principais Tecnologias",
            technologies: [
                {name: "HMTL"},
                {name: "CSS"},
                {name: "Javascript"},
                {name: "Node.js"}
            ]
        },
        links: [
            {name: "Facebook", url: ""},
            {name: "Instagram", url: ""},
            {name: "Github", url: ""}
        ]
    }

    return res.render("about", {about: data})
})

server.get("/articles", (req, res) => {
    return res.render("articles", {items: articles})
})

server.get("/article/:id", (req, res) => {
    const id = req.params.id

    const article = articles.find((article) => {
        return article.id == id
    })

    if(!article) {
        return res.status(404).render("not-found")
    }

    return res.render("article", {item: article})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})