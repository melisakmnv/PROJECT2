const express = require("express");
const router = new express.Router();

const ActivityModel = require("../models/activityModel");
// const TagModel = require("../models/tagModel");
// const UserModel = require("../models/userModel");


  router.get("/:id", (req, res, next) => {
    ActivityModel.findById(req.params.id)
    .then((activity) => {
      res.render("destination/activity.hbs", { activity });
    })
    .catch(next);
  });


// Update

router.get("/:id/edit", (req, res, next) => {
  ActivityModel.findById(req.params.id)
    .then((activity) => {
      res.render("destination/activity_edit.hbs", { activity });
    })
    .catch(next);
});

router.post("/:id/edit", (req, res, next) => {
  ActivityModel.findByIdAndUpdate(req.params.id, req.body)
    .then((activity) => {
      res.redirect("/activity/:id");
    })
    .catch(next);
});

// Delete (pour les admins)

// router.get("/delete/:id", async (req, res, next) => {
//   try {
//     // use the model to delete one label by id
//     await ActivityModel.findByIdAndDelete(req.params.id);
//     res.redirect("/dashboard"); // then redirect to labels full list
//   } catch (err) {
//     next(err);
//   }
// });

  module.exports = router;