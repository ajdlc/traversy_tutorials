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

// Get single member
app.get("/api/members/:id", (req, res) => {
    // The :id above is a url parameter
    // res.send(req.params.id);

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => {
            return member.id === parseInt(req.params.id);
        }))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
})

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });