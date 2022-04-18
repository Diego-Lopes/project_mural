const express = require("express");
const router = express.Router();
const cors = require('cors');
const posts = require("../model/post");

const options = {
  origin: 'http://localhost:3333'
}

router.use(cors(options));

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));

});

router.post("/new", (req, res) => {
  let title = req.body.title;

  let description = req.body.description;

  posts.newPost(title, description);

  res.send("Created");
});

router.delete("/new/:id", (req, res) => {
  posts.deletePost(req.params.id);
  console.log(req.params.id);
  res.status(200).send("deleted");
});

module.exports = router;