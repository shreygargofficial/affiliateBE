const cors = require("cors");
const express = require("express");
const routing = require("./Routing/routing");
const bodyParser = require("body-parser");
const archiver = require("archiver");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const ErrorLogger = require("./errorLogger");
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5175",
    "http://localhost:5174",
    "shreygarg.in",
    "https://www.shreygarg.in",
  ],
  // specify the frontend URL
  credentials: true, // allow cookies to be sent with requests
};

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", routing);
app.use(ErrorLogger);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
