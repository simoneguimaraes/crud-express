const express = require("express");
const postRouter = express.Router();
const dbFake = require("./db");
const { v4: uuidv4 } = require("uuid");

postRouter.post("/create-post", (req, res) => {
  dbFake.push({ _id: uuidv4(), ...req.body });
  console.log(dbFake);
  return res.status(201).json({ ...dbFake[dbFake.length - 1] });
});

postRouter.get("/get-posts", (req, res) => {
  return res.status(200).json({ ...dbFake });
});

postRouter.patch("/edit-post/:id", (req, res) => {
  const indexToSubstitute = dbFake.findIndex((currentPost) => {
    return currentPost._id === req.params.id;
  });

  console.log(indexToSubstitute);

  dbFake[indexToSubstitute] = { ...dbFake[indexToSubstitute], ...req.body };

  res.status(200).json({ ...dbFake[indexToSubstitute] });
});

postRouter.delete("/delete-post/:id", (req, res) => {
  dbFake.map((currentPost, i) => {
    if (currentPost._id === req.params.id) {
      dbFake.splice(i, 1);
    }
  });

  res.status(200).json({});
});
module.exports = postRouter;
