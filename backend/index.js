const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/createUser", (req, res) => {
   UserModel.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
});

app.get("/users/get", (req, res) => {
   UserModel.find({})
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
   const id = req.params.id;
   UserModel.findById({ _id: id })
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
   const id = req.params.id;
   UserModel.findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, mail: req.body.mail, city: req.body.city }
   )
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
   const id = req.params.id;
   UserModel.findByIdAndDelete({ _id: id })
      .then((res) => res.json(res))
      .catch((err) => res.json(err));
});

app.listen(3000, () => {
   console.log("server is running port:3000");
});
