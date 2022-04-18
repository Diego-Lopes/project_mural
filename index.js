const express = require("express");
const app = express();
const routes = require("./src/routes/api");
const path = require("path");
const PORT = 3333;


app.use(express.json());

app.use('/api', routes);

app.use(express.static(path.join(__dirname, "front-end")));



app.listen(PORT, () => {
  console.log(`🔥 Server online on port: ${PORT}`);
});
