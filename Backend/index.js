const express = require("express");
const connection = require("./config/db");

const postRouter=require("./route/post.route");

require("dotenv").config()
const cors=require("cors");
const app = express();
app.use(cors({
  origin:"*",
}))
app.use(express.json());



app.use("/posts",postRouter)



app.listen(process.env.port, async () => {
  try {
    await connection;

    console.log("connection established");
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
  console.log(`listening on port ${process.env.port}`);
});
