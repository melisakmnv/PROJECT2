const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

router.get('/signin', (req, res) => {
  res.render('auth/signin.hbs');
});


router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email: email });
  if (!foundUser) {
      res.redirect("/auth/signin")
    // return res.status(400).json({ errors: [{ msg: 'No user' }] }); // to see on the console // Postman
      // ------- need flash message ------- //
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
        res.redirect("/auth/signin")
    //   return res
    //     .status(400)
    //     .json({ errors: [{ msg: 'Password is not correct' }] });
      // ------- need flash message ------- //
    } else {
    //   res.send('Yayyyy');
      // ------- need flash message ------- //
    res.redirect("/")
    }
  }
});

//POST --- Add new user //

router.get('/signup', (req, res) => {
  res.render('auth/signup.hbs');
});

// POST - ADD new user => Need to be modified => Check email, check password

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = { ...req.body };
    const foundUser = await UserModel.findOne({ email: newUser.email });

    if (foundUser) {
        res.redirect("/auth/signup")
    //   return res
    //     .status(400)
    //     .json({ errors: [{ msg: 'This Email is already used' }] });
    // ------- need flash message ------- //

    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await UserModel.create(newUser);
      res.redirect("/auth/signin")
    //   res.send('You are registered !');
      // ------- need flash message ------- //

    }
  } catch (err) {
    console.error(err);
    // return res.status(400).json({ errors: [{ msg: 'problem' }] });
      // ------- need flash message ------- //
  }
});
module.exports = router;

