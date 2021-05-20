const express = require('express');
const router = new express.Router();
const UserModel = require('../models/userModel');
const ActivityModel = require('../models/activityModel');
const TagModel = require('../models/tagModel');
// const UserModel = require("../models/userModel");

// router.get("/", (req, res, next) => {
//   ActivityModel.find()
//   .then((destinations) => {
//     console.log(destinations);
//     res.render("destinations_list.hbs", { destinations });
//   })
//   .catch(err => next(err));
// });

// Go to city page
      // Paris    Bordeaux
router.get('/:id', (req, res, next) => {

  ActivityModel.find({city_name: req.params.id})
    .then((activities) => {

      const restaurant = activities.filter((activity) => {
        return  activity.category === "Restaurant"
      });

      // console.log("RESTAURANT");
      // console.log(restaurant);

      const culture = activities.filter((activity) => {
        return  activity.category === "Culture"
      });

      // console.log("CULTURE");
      // console.log(culture);

      const nature = activities.filter((activity) => {
        return  activity.category === "Nature"
      });

      // console.log("NATURE");
      // console.log(nature);

      const city = activities.filter((city) => {
        return  city.category === "City"
      });

      // console.log("CITY");
      // console.log(city);

      res.render('destination/city.hbs', { city, restaurant, culture, nature });
    })
    .catch(next);
});

// Update City

router.get('/:id/edit', (req, res, next) => {
  ActivityModel.findById(req.params.id)
    .then((city) => {
      res.render('destination/destinations_edit.hbs', { city });
    })
    .catch(next);
});

router.post('/:id/edit', (req, res, next) => {
  ActivityModel.findByIdAndUpdate(req.params.id, req.body)
    .then((city) => {
      res.redirect('/destinations/:id');
    })
    .catch(next);
});

// ADD Activity

router.get('/activity_add', (req, res) => {
  TagModel.find().then((tags) =>
    res.render('destination/destinations_add.hbs', { tags })
  );
});

router.post('/activity_add', (req, res, next) => {
  const activity = { ...req.body };
  console.log(req.body);
  ActivityModel.create(activity)
    .then((dbResult) => {
      console.log(dbResult);
      res.redirect('/destinations');
    })
    .catch((err) => {
      console.log(err);
      res.render('destination/destinations_add.hbs');
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

// Add fav

router.post('/wishlist', async (req, res, next) => {

  !req.session.currentUser.wishlist.includes(req.body._id) &&
    req.session.currentUser.wishlist.push(req.body._id);

  const dbUser = await UserModel.findById(req.session.currentUser._id);
  !dbUser.wishlist.includes(req.body._id) &&
    await UserModel.findByIdAndUpdate(req.session.currentUser._id, {
      $push: { wishlist: req.body._id },
    });
  res.redirect(`/destinations/${req.body._id}`);

});

module.exports = router;
