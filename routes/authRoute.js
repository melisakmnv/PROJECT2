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
    // res.redirect('/auth/signin');  I will change to 20 
    res.render('/auth/signin')
    return;

    // ----- postman test ----- //
    // return res.status(400).json({ errors: [{ msg: 'No user' }] }); // to see on the console // Postman

    // ------- FLASH MESSAGE GOES HERE ------- // 
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      res.redirect('/auth/signin');

      // ----- postman test ----- //
      //   return res
      //     .status(400)
      //     .json({ errors: [{ msg: 'Password is not correct' }] });

      // ------- FLASH MESSAGE GOES HERE ------- //
    } else {
      // ----- postman test ----- //
      //   res.send('Yayyyy');
      /// ------- FLASH MESSAGE GOES HERE ------- //
      
      // const userObject = foundUser.toObject();
      // delete userObject.password;
      req.session.currentUser = foundUser;
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
      res.redirect('/auth/signup');

      // ----- postman test ----- //
      // return res.status(400).json({ errors: [{ msg: 'This Email is already used' }] });

      // ------- FLASH MESSAGE GOES HERE ------- //
    } else if (foundUsername) {
      res.redirect('/auth/signup');
      // ----- postman test ----- //
      // return res
      //   .status(400)
      //   .json({ errors: [{ msg: 'username is already used' }] });

      // ------- FLASH MESSAGE GOES HERE ------- //
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await UserModel.create(newUser);
      res.redirect('/auth/signin');

      // ----- postman test ----- //
      // res.send('You are registered !');

      // ------- FLASH MESSAGE GOES HERE ------- //
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({ errors: [{ msg: 'problem' }] });

    // ------- FLASH MESSAGE GOES HERE ------- //
  }
});


// SIGNOUT //

router.post('/signout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

module.exports = router;