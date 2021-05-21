const express = require("express");
const router = new express.Router();

const UserModel = require("./../models/userModel");
const ActivityModel = require("./../models/activityModel");

//DASHBOARD
router.get("/", async (req, res, next) => {
  const user = await UserModel.findById(req.session.currentUser._id).populate("wishlist");
  // console.log("YOU ARE ON DASHBOARD");
  // console.log(user)
  res.render("dashboard/dashboard.hbs", { user })
});

//WISHLIST
router.get("/mywishlist", async (req, res, next) => {
  const user = await UserModel.findById(req.session.currentUser._id).populate("wishlist");
  res.render("dashboard/wishlist.hbs", { user });
});

// Destination ADD

router.get("/destinations_add", (req, res) => {
  res.render("dashboard/destinations_add.hbs");
});

router.post("/destinations_add", (req, res, next) => {
  
    ActivityModel.create(req.body)
      .then((dbResult) => {
        console.log(dbResult);
        res.redirect("/dashboard");
      })
      .catch((err) => {
        res.render("dashboard/destinations_add.hbs");
      });
  });



module.exports = router;
