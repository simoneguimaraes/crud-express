const express = require("express");

const postRouter = require("./posts");

const PORT = 4000;

const app = express();

app.use(express.json());
app.use("/", postRouter);

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
