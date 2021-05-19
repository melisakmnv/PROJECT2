const express = require('express');
const router = express.Router();
const UserModel = require('./../models/userModel');


// Hello 

router.get('/', (req, res, next) => {
  UserModel.findById(req.session.currentUser)
  .then((currentUser) => {
    res.render('dashboard/myProfile.hbs', {currentUser})
  })
  .catch(next);
})


// UPDATE

router.get('/edit', (req, res, next) => {
  UserModel.findById(req.session.currentUser)
  .then((currentUser) => {
    res.render('dashboard/myProfile_edit.hbs', {currentUser})
  })
  .catch(next);
})


router.post('/edit', (req, res, next) => {
  UserModel.findByIdAndUpdate(req.session.currentUser, req.body)
  .then((currentUser) => {
    res.redirect('/dashboard/myprofile')
  })
  .catch(next);
})

// DELETE

router.get('/delete', (req, res, next) => {
  UserModel.findByIdAndDelete(req.session.currentUser)
  .then(() => {
    req.session.destroy();
    res.redirect('/')  // => when we have deployed the site  => redirect to Home page
  })
  .catch(next);
});

module.exports = router;