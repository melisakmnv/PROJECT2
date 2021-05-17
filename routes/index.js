const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.hbs") // comment : when we use layout.hbs => content is duplicate 
});

router.get("/road", (req, res) => {
    res.render("road.hbs")
})

router.get("/contact", (req, res) => {
    res.render("contact.hbs")
})

module.exports = router;