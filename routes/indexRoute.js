const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.hbs") // comment : when we use layout.hbs => content is duplicate 
});

router.get("/destinations", (req, res) => {
    res.render("destinations.hbs")
})

router.get("/aboutus", (req, res) => {
    res.render("whoAreWe.hbs")
})

module.exports = router;