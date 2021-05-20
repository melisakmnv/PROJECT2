const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

// ========= NEED TO PUT FLASH MESSAGE ========= //

// ======= GET - SIGNIN ======= //
router.get('/signin', (req, res) => {
  res.render('auth/signin.hbs');
});

// ======= POST - SIGNIN ======= //

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email: email });
  if (!foundUser) {
    req.flash("error", "Email incorrect");
    res.redirect('/auth/signin');
    return;
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      req.flash("error", "Password incorrect");
      res.redirect('/auth/signin');
    } else {
      // const userObject = foundUser.toObject();
      // delete userObject.password;
      req.session.currentUser = foundUser;
      // req.flash("success", "Successfully logged in...");
      res.redirect('/dashboard');
    }
  }
});

// ======= GET - SIGNUP ======= //

router.get('/signup', (req, res) => {
  res.render('auth/signup.hbs');
});

// ======= POST - SIGNUP - Add new user ======= //

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = { ...req.body };
    const foundUser = await UserModel.findOne({ email: newUser.email });
    const foundUsername = await UserModel.findOne({
      username: newUser.username,
    });

    if (foundUser) {
      req.flash("warning", "This email is already used");
      res.redirect('/auth/signup');
    } else if (foundUsername) {
      req.flash("warning", "This username is already used");
      res.redirect('/auth/signup');
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await UserModel.create(newUser);
      req.flash("success", "Congratulations ! You are now registered ");
      res.redirect('/auth/signin');
    }
  } catch (err) {
    console.error(err);
    res.redirect("/auth/signup");
  }
});

// SIGNOUT //

router.post('/signout', (req, res) => {
  req.session.destroy();
  // req.flash("success", "You have just logged out ! ");
  res.redirect('/');  
});


module.exports = router;
