const express = require("express");
const router = new express.Router();

const ActivityModel = require("../models/activityModel");
// const TagModel = require("../models/tagModel");
// const UserModel = require("../models/userModel");

router.get("/", (req, res, next) => {
  ActivityModel.find()
  .then((destinations) => {
    res.render("destination/destinations_list.hbs", { destinations });
  })
  .catch(next);
});

// Go to city page

  router.get("/:id", (req, res, next) => {
    ActivityModel.findById(req.params.id)
    .then((city) => {
      // console.log(activity);
      res.render("destination/city.hbs", { city });
    })
    .catch(next);
  });


// Update

router.get("/:id/edit", (req, res, next) => {
  ActivityModel.findById(req.params.id)
    .then((city) => {
      res.render("destination/destination_edit.hbs", { city });
    })
    .catch(next);
});

router.post("/:id/edit", (req, res, next) => {
  ActivityModel.findByIdAndUpdate(req.params.id, req.body)
    .then((city) => {
      res.redirect("/destinations/:id");
    })
    .catch(next);
});

// Delete

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