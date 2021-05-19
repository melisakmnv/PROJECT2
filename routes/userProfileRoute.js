const express = require('express');
const router = express.Router();
const UserModel = require('./../models/userModel');

// @route     GET dashboard/profile
// @desc      Test
// @access    Private

// PROFILE => go to my profile
router.get('/', (req, res) => {
  res.render('dashboard/myProfile.hbs', { username : req.username });
});




// Hello 

router.get('/myprofile', (req, res, next) => {
  UserModel.findById(req.session.currentUser._id)
  .then((currentUser) => {
    res.render('dashboard/myProfile.hbs', {currentUser})
  })
  .catch(next);
})


// UPDATE

router.get('/myprofile/edit', (req, res, next) => {
  UserModel.findById(req.session.currentUser)
  .then((currentUser) => {
    res.render('dashboard/myProfile_edit.hbs', {currentUser})
  })
  .catch(next);
})


router.post('/myprofile/edit', (req, res, next) => {
  UserModel.findByIdAndUpdate(req.session.currentUser)
  .then(() => {
    res.redirect('/Hello/myprofile')
  })
  .catch(next);
})






// router.get("/users", (req, res, next) => {
//   UserModel.find()
//   .then((user) => {
//       console.log(user),
//       res.render("dashboard/myProfile.hbs", {user})
//   })
//   .catch((err) => next(err))
// })



// router.get("/myprofile", (req, res) => {
//   res.render('dashboard/myProfile.hbs')
// })


// // Photo, username , email, Description/Bio, city, account

// router.get('/myprofile/:id', (req, res, next) => {
//   UserModel.findById(req.params.id)
//   .then((user) => {
//     res.render('dashboard/myProfile.hbs', {user})
//         // return res
//       //   .status(400)
//       //   .json({ errors: [{ msg: 'username is already used' }] });
//   })
//   .catch(next);
// })

// // Edit profile

// router.get('/myprofile/:id/edit', (req, res, next) => {
//   UserModel.findById(req.params.id)
//   .then((user) => {
//     res.render('dashboard/myProfile_edit.hbs', {user})
//   })
//   .catch(next);
// });

// router.post('/myprofile/:id/edit', (req, res, next) => {
//   UserModel.findByIdAndUpdate(req.params.id)
//   .then(() => {
//     res.redirect('dashboard/myProfile.hbs')
//   })
//   .catch(next);
// });


// // Delete profile.. / delete account

// router.get('/myprofile/:id/delete', (req, res, next) => {
//   UserModel.findByIdAndDelete(req.params.id)
//   .then(() => {
//     res.redirect('/');
//   })
//   .catch(next);
// });

 // ----- TEST ----- //

// DISPLAY ALL USERS :) 


// router.get("/users", (req,res,) => {
//   UserModel.find()
//   .then((user) => {
//     res.render("dashboard/myProfile.hbs", {users: dbSucces});
//     console.log(user)
//   })
//   .catch((err) => next(err))
// })  ==> display on html worked ! 





// router.get("/user", async (req, res, next) => {
//   try {
// res.render("dashboard/myProfile.hbs", {
//   user: await UserModel.findById(req.params.id),
// })
// } catch (err) {
//   next(err);
// }});


module.exports = router;