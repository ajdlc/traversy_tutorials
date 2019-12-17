const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

// Local files
const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

// Initialize the middleware
// app.use(logger);

// Initialize Express built-in body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Handlebars Middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Homepage Route - This trumps the static folder as well.
app.get("/", (req, res) => res.render("index", {
    title: "Member App",
    members
}));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });