const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongodb = require("mongodb");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

require("dotenv").config();

const MongoClient = mongodb.MongoClient;
const uri = process.env.MONGODB_URI;
let db;

MongoClient.connect(uri, (err, client) => {
  if (err) return console.error(err);
  db = client.db("email_db");
});

// default empty route to check API
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// check authorization of email
app.get("/verify", async (req, res) => {
  try {
    const { jwt } = req.body;
    const base64Url = jwt.split(".")[1];
    const decodedValue = JSON.parse(
      Buffer.from(base64Url, "base64").toString("ascii")
    );
    console.log(decodedValue);
    await db.collection("Email").insert(decodedValue);
    res.json({ msg: "Data stored" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// either PORT env variable or 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`REST API running on port ${PORT}...`));
