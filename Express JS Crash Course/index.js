const express = require("express");
const path = require("path");

// Local files
const members = require("./Members");
const logger = require("./middleware/logger");

const app = express();

// Initialize the middleware
// app.use(logger);

  // Gets all members
app.get("/api/members", (req, res) => res.json(members));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });