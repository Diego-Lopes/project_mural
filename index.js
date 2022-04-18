const express = require("express");
const app = express();
const posts = require("./src/model/post");
const PORT = 3333;

app.use(express.json());

app.get("/all", (req, res) => {
  res.send(posts.getAll());
  /**
   * agora que posts não é mais um array e sim um objeto
   * usamos getAll() para chamar o array do objeto.
   */
});

app.post("/new", (req, res) => {
  let title = req.body.title;

  let description = req.body.description;

  posts.newPost(title, description);

  res.send("Created");
});

app.delete("/new:id", (req, res) => {
  posts.deletePost(req.params.id);
  console.log(req.params.id);
  res.status(200).send("deleted");
});

app.listen(PORT, () => {
  console.log(`🔥 Server online on port: ${PORT}`);
});
