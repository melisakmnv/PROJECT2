const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");



router.get("/signin", (req, res) => {
    res.render("auth/signin.hbs")
})



//POST --- Add new user //

// router.post("/signup", async(req,res, next) => {
//     try {
//         const newUser = {...req.body};
//         const foundUser = await UserModel.findOne({email: newUser.email});

//         if(foundUser) {
//             res.redirect("/auth/signup"); // Should put warning message => Flash message
//         } else {
//             const hashedPassword = bcrypt.hashSync(newUser.password, 10);
//             newUser.password = hashedPassword;
//             await UserModel.create(newUser);
//             res.redirect("/auth/signin");
//         }
//     } catch (err) {
//         // let errorMessage = "";
//         // for (field in err.errors) {
//         //   errorMessage += err.errors[field].message + "\n";
//         // }
//         res.redirect("/");
//       }
// })

router.get("/signup", (req, res) => {
    res.render("auth/signup.hbs")
});

// POST - ADD new user => Need to be modified => Check email, check password 

router.post("/signup", (req, res) => {
    UserModel.create(req.body)
    .then((dbSucces) => {
        console.log(req.body);
        res.send("User route")
    })
    .catch((err) => {
        console.error(err);
        res.redirect("/auth/signup")
    })
})



module.exports = router;