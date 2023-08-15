const express = require("express");
const PostModel = require("../model/post.model");

const app = express.Router();

app.post("/", async (req, res) => {
  // verify token
  const payload = req.body;
  try {
    const new_note = new PostModel(payload);
    await new_note.save();
    res.send("created the note");
  } catch (e) {
    console.log(e);
    res.send("error creating");
  }
  
});



module.exports = app;
