const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.listen(5000, () => {
    console.log("server is running!")
})

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.use(express.static("public"))

server.get("/", (req, res) => {
    return res.render("about")
})

server.get("/content", (req, res) => {
    return res.render("content")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});