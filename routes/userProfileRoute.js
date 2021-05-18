const express = require('express');
const router = new express.Router();

const UserModel = require('./../models/userModel');

// PROFILE => go to my profile
router.get('/myprofile', (req, res) => {
  res.render('dashboard/myProfile.hbs', { user: req.user });
});

// Photo, username , email, Description/Bio, city, account

router.get('/myprofile/:id', (req, res, next) => {
  UserModel.findById(req.params.id)
  .then((user) => {
    res.render('dashboard/myProfile.hbs', {user})
  })
  .catch(next);
})

// Edit profile

router.get('/myprofile/:id/edit', (req, res, next) => {
  UserModel.findById(req.params.id)
  .then((user) => {
    res.render('dashboard/myProfile_edit.hbs', {user})
  })
  .catch(next);
});

router.post('/myprofile/:id/edit', (req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id)
  .then(() => {
    res.redirect('dashboard/myProfile.hbs')
  })
  .catch(next);
});


// Delete profile.. / delete account

router.get('/myprofile/:id/delete', (req, res, next) => {
  UserModel.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/');
  })
  .catch(next);
});

