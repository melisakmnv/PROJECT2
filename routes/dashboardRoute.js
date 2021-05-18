const express = require("express");
const router = new express.Router();

const UserModel = require("./../models/userModel");
const ActivityModel = require("./../models/activityModel");

//DASHBOARD
router.get("/", async (req, res, next) => {
  const users = await UserModel.find();
  const destinations = await ActivityModel.find();
  res.render("dashboard/dashboard.hbs", { users, destinations });
});

//WISHLIST
router.get("/mywishlist", async (req, res, next) => {
    const users = await UserModel.find();
    const destinations = await ActivityModel.find();
    res.render("dashboard/wishlist.hbs", { users, destinations });
  });








//MY DESTINATIONS (CRUD)
// router.get("/mydestinations", (req, res) => {
//   res.render("myProfile.hbs", { user: req.user });
// });



module.exports = router;
