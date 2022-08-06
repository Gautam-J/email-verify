const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectToDB = require("./database/db");

const app = express();

connectToDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// default empty route to check API
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// check authorization of email
app.post("/verify", (req, res) => {
  res.send("Verify");
});

// either PORT env variable or 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`REST API running on port ${PORT}...`));
