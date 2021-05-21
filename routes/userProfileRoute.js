const { signedCookie } = require("cookie-parser");
const express = require("express");
const router = express.Router();
const UserModel = require("./../models/userModel");
const uploader = require("./../config/cloudinary");



router.get("/", (req, res, next) => {
  UserModel.findById(req.session.currentUser)
    .then((currentUser) => {
      res.render("dashboard/myProfile.hbs", { currentUser });
    })
    .catch(next);
});

// UPDATE

router.get("/edit", (req, res, next) => {
  UserModel.findById(req.session.currentUser)
    .then((currentUser) => {
      res.render("dashboard/myProfile_edit.hbs", { currentUser });
    })
    .catch(next);
});

router.post("/edit", uploader.single("avatar"), async (req, res, next) => {
  try {
    const newUpdateUser = { ...req.body };
    const foundUsername = await UserModel.findOne({
      username: newUpdateUser.username,
    });
    // const foundEmail = await UserModel.findOne({ email: newUpdateUser.email});
    if (foundUsername) {
      req.flash("warning", "This username is already used");
      res.redirect("/dashboard/myprofile/edit");
      // } else if (foundEmail) {
      //   req.flash("warning", "This email is already used");
      //   res.redirect('/dashboard/myprofile/edit');
    } else {
      // if (req.file) newUpdateUser.avatar = req.file.path;
      await UserModel.findByIdAndUpdate(req.session.currentUser, req.body);
      req.flash("success", "Your profile has been updated !");
      res.redirect("/dashboard/myprofile");
    }
  } catch (err) {
    next(err);
  }
});

// router.post('/edit', async (req, res, next) => {
//   try {
//     await UserModel.findByIdAndUpdate(req.session.currentUser, req.body);
//     res.redirect('/dashboard/myprofile')
//   }
//   catch (err) {
//     next(err);
//   }
// })

// DELETE

router.get("/delete", (req, res, next) => {
 
    UserModel.findByIdAndDelete(req.session.currentUser)
    .then(() => {
      req.session.destroy();
      res.redirect("/"); // => when we have deployed the site  => redirect to Home page
    })
    .catch(next);
});

module.exports = router;
