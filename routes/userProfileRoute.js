const express = require('express');
const router = express.Router();
const UserModel = require('./../models/userModel');


// Hello 

router.get('/user', (req, res, next) => {
  UserModel.findById(req.session.currentUser)
  .then((currentUser) => {
    res.render('dashboard/myProfile.hbs', {currentUser})
  })
  .catch(next);
})


// UPDATE

router.get('/user/edit', (req, res, next) => {
  UserModel.findById(req.session.currentUser)
  .then((currentUser) => {
    res.render('dashboard/myProfile_edit.hbs', {currentUser})
  })
  .catch(next);
})


router.post('/user/edit', (req, res, next) => {
  UserModel.findByIdAndUpdate(req.session.currentUser)
  .then(() => {
    res.redirect('/dashboard/myprofile/user')
  })
  .catch(next);
})

// DELETE

router.get('/user/delete', (req, res, next) => {
  UserModel.findByIdAndDelete(req.session.currentUser)
  .then(() => {
    res.redirect('/')
  })
  .catch(next);
});

module.exports = router;