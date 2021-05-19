const express = require("express");
const router = new express.Router();

const UserModel = require("./../models/userModel");
const ActivityModel = require("./../models/activityModel");

//DASHBOARD
router.get("/", async (req, res, next) => {
  const user = await UserModel.findById(req.session.currentUser._id).populate("wishlist");
  res.render("dashboard/dashboard.hbs", { user });
});

//WISHLIST
router.get("/mywishlist", async (req, res, next) => {
    const users = await UserModel.find();
    const destinations = await ActivityModel.find();
    res.render("dashboard/wishlist.hbs", { users, destinations });
  });

// Destination ADD

router.get("/destination_add", (req, res) => {
  res.render("dashboard/destination_add.hbs");
});

router.post("/destination_add", (req, res, next) => {
  
    ActivityModel.create(req.body)
      .then((dbResult) => {
        console.log(dbResult);
        res.redirect("/dashboard");
      })
      .catch((err) => {
        res.render("dashboard/destination_add.hbs");
      });
  });



module.exports = router;
