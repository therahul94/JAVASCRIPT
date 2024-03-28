const express = require("express");
const app = express();
const cors = require("cors");
const { inputValidation } = require("./types");
const { CardModel } = require("./db/db");
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.post("/Card", async (req, res) => {
  const { fullname, description, Interests, SocialmediaHandles } = req.body;

  // input validation
  const response = inputValidation({
    fullname,
    description,
    Interests,
    SocialmediaHandles,
  });

  if (!response) {
    return res.status(400).json({ msg: "Input is invalid" });
  }

  //store the card data in the db
  const CardData = await CardModel.create({
    fullname,
    description,
    Interests,
    SocialmediaHandles,
  });

  if (CardData) {
    return res.status(201).json({ msg: "Card details are inserted" });
  }
});

app.get("/Cards", async (req, res) => {
  try {
    const carddetails = await CardModel.find();
    return res.status(200).json({ msg: carddetails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Something with our server" });
  }
});

app.listen(8000, () => {
  console.log("server connected");
});
