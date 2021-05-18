module.exports = function protectRoute(req, res, next) {
    if (req.session.currentUser) next();
    else res.redirect("/auth/signin")
}

// if not logged in, can not access routes 