const express = require("express");
const router = express.Router();
const uuid = require("uuid");

// Local files
const members = require("../../Members");

// Gets all members
router.get("/", (req, res) => res.json(members));

// Get single member
router.get("/:id", (req, res) => {
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

// Create Member
router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    };

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "Please include a name and email" });
    }

    members.push(newMember);

    res.json(members);

});

// Update Member
router.put("/:id", (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updatedMember = req.body;
        members.forEach(member => {
           if (member.id === parseInt(req.params.id)) {
               member.name = updatedMember.name ? updatedMember.name : member.name;
               member.email = updatedMember.email ? updatedMember.email : member.email;

               res.json({ msg: "Member updated", member });
           } 
        });
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
})

module.exports = router;