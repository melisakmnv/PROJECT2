const express = require("express");
const router = new express.Router();

const ActivityModel = require("../models/activityModel");
// const TagModel = require("../models/tagModel");
// const UserModel = require("../models/userModel");

router.get("/", (req, res, next) => {
  ActivityModel.find()
  .then((destinations) => {
    console.log(destinations);
    res.render("destination/destinations_list.hbs", { destinations });
  })
  .catch(err => next(err));
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


// Update City

router.get("/:id/edit", (req, res, next) => {
  ActivityModel.findById(req.params.id)
    .then((city) => {
      res.render("destination/destinations_edit.hbs", { city });
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

// ADD Activity

router.get("/activity_add", (req, res) => {
  res.render("destination/activity_add.hbs");
});

router.post("/activity_add", (req, res, next) => {
  const activity = {...req.body}
  console.log(req.body)
    ActivityModel.create(activity)
      .then((dbResult) => {
        console.log(dbResult);
        res.redirect(`/destinations/${dbResult._id}`);
      })
      .catch((err) => {
        console.log(err)
        res.render("destination/activity_add.hbs");
      });
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