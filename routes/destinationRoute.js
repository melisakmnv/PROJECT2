const express = require("express");
const router = new express.Router();

const ActivityModel = require("../models/activityModel");
// const TagModel = require("../models/tagModel");
// const UserModel = require("../models/userModel");

// Go to activity page

  router.get("/activity/:id", (req, res, next) => {
    ActivityModel.findById(req.params.id)
    .then((activities) => {
      console.log(activities);
      res.render("destination/activity.hbs", { activities });
    })
    .catch(next);
  });

  module.exports = router;