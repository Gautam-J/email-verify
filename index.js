const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// default empty route to check API
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// either PORT env variable or 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`REST API running on port ${PORT}...`));
