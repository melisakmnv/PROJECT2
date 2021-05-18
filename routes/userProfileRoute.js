const express = require('express');
const router = new express.Router();
const UserModel = require('./../models/userModel');

// @route     GET dashboard/profile
// @desc      Test
// @access    Private

// PROFILE => go to my profile
// router.get('/myprofile/{{this.id}}', (req, res) => {
//   res.render('dashboard/myProfile.hbs', { username : req.username });
// });

// router.get('/myprofile/:username', (req, res, next) => {
//   UserModel.findById(req.params.username)
//   .then((user) => {
//     res.render('dashboard/myProfile.hbs', {user})
//   })
//   .catch(next);
// })

router.get("/myprofile", (req, res) => {
  res.render('dashboard/myProfile.hbs')
})


// Photo, username , email, Description/Bio, city, account

router.get('/myprofile/:id', (req, res, next) => {
  UserModel.findById(req.params.id)
  .then((user) => {
    res.render('dashboard/myProfile.hbs', {user})
        // return res
      //   .status(400)
      //   .json({ errors: [{ msg: 'username is already used' }] });
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



module.exports = router;