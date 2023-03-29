const router = require('express').Router();
const express = require('express');
const posts = require('../model/posts');
const bodyParser = require("body-parser");
const cors = require('cors');

const options = {
    origin: 'http://localhost:3000',
}

router.use(cors(options));

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getall()));
})

router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let content = req.body.content;

    if (title == "" || content == "") {
        res.send("Preencha todos os campos!");
        return;
    }

    posts.newPost(title, content);

    res.send("Post criado com sucesso!");
});

module.exports = router;