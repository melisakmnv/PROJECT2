const express = require("express");
const router = new express.Router();

const UserModel = require("./../models/userModel");


//PROFILE
router.get("/myprofile", (req, res) => {
    res.render("dashboard/myProfile.hbs", { user: req.user });
  });