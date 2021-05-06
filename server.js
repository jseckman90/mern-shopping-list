const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");

const app = express();

//Body parser middleware
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

//db config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("mongoDB Connected");
  })
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);

app.get("/", (req, res) => {
  res.send("hello from 5000");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
