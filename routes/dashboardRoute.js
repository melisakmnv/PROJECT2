const express = require("express");
const router = new express.Router();

const UserModel = require("./../models/userModel");


//WISHLIST
router.get("/mywishlist", async (req, res, next) => {
    const users = await userModel.find();
    const destinations = await activityModel.find();
    res.render("dashboard/wishlist.hbs", { users, destinations });
  });








//MY DESTINATIONS (CRUD)
// router.get("/mydestinations", (req, res) => {
//   res.render("myProfile.hbs", { user: req.user });
// });



module.exports = router;
