const express = require("express");
const router = express.Router();
const ActivityModel = require("./../models/activityModel")


//HOMEPAGE
router.get("/", (req, res) => {
  res.render("index.hbs"); // comment : when we use layout.hbs => content is duplicated
});


//MOST POPULAR DESTINATIONS (Ask how to sort by most popular)
router.get("/destinations", (req, res) => {
  ActivityModel
    .find()
    .then((destinations) =>{

      res.render("destinations_list.hbs", { destinations })
    })
    .catch(err => {console.log(err);
    next(err)});
    
});

// NONE USER //

// router.get("/", async (req, res, next) => {
//   try {
//     const lastArtists = await ArtistModel.find()
//       .sort({ createdAt: -1 })
//       .limit(3);

//     const lastAlbums = await AlbumModel.find().sort({ createdAt: -1 }).limit(3);

//     res.render("index", {
//       lastArtists,
//       lastAlbums,
//     });
//   } catch (err) {
//     next(err);
//   }
// });









//WHO ARE WE
router.get("/whoarewe", (req, res) => {
  res.render("whoAreWe.hbs");
});


//MAP

//WHO ARE WE
router.get("/map", (req, res) => {
    res.render("dashboard/myProfile.hbs", { user: req.user });
  });


//SEARCH BAR ???
// router.get("/search/:title", (req, res) => {
//   let title = req.params.title;
//   activityModel.find(
//     { title: title }.then(() =>
//       res.render("cities_list.hbs", { products: products })
//     )
//   );
// });

// app.get("/search", (req, res) => {
//   const { city } = req.query;
//   activityModel
//     .find({ $text: { $search: city } })
//     .then(() => res.render("cities_list.hbs", { activities }));
// });


module.exports = router;
