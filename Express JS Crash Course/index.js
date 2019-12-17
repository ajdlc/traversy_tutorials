const express = require("express");
const path = require("path");

// Local files
const logger = require("./middleware/logger");

const app = express();

// Initialize the middleware
// app.use(logger);

// Initialize Express built-in body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });