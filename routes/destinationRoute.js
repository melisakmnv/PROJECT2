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

// Add a destination 
// A insérer dans dashboard route

// router.get("/myDestination_add", (req, res) => {
//   res.render("myDestination_add.hbs");
// });

// router.post("/myDestination_add", (req, res, next) => {
  
//     ActivityModel.create(req.body)
//       .then((dbResult) => {
//         console.log(dbResult);
//         res.redirect("/dashboard");
//       })
//       .catch((err) => {
//         res.render("activity.hbs");
//       });
//   });


// Update

// router.get("/myDestination_edit/:id", (req, res, next) => {
//   ActivityModel.findById(req.params.id)
//     .then((activity) => {
//       res.render("myDestination_edit.hbs", { activity });
//     })
//     .catch(next);
// });

// router.post("/myDestination_edit/:id", (req, res, next) => {
//   ActivityModel.findByIdAndUpdate(req.params.id, req.body)
//     .then((activity) => {
//       res.redirect("/dashboard");
//     })
//     .catch(next);
// });

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