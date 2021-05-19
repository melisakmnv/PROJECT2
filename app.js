require('./config/mongodb');
require('dotenv').config();

// ------------------------------//
// STEP 1 : Require dependencies //
// ------------------------------//

const express = require('express');
const createError = require('http-errors');
const hbs = require('hbs');
const path = require('path');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require("connect-mongo")

// ---------------------//
//  STEP 2 : Base Setup //
// ---------------------//

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerPartials(path.join(__dirname, 'views/auth/partials'));
app.use(express.urlencoded({ extended: false })); // So I past this line to be able to read data [object: null prototype {....}]
app.use(express.json({ extended: false })); // This allows to test on postman and display data in terminal ==> {} data empty
app.use(cookieParser());
console.log("j'aime les frites")
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    // store: new MongoStore ({mongooseConnection: mongoose.connection}),
    cookie: {
      // sameSite: 'none',
      // httpOnly: true,
      maxAge: 600000,
    },
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

app.use(flash());

// ----------- MIDDLEWARES ----------- //
app.use(require('./middlewares/exposeFlashMessage'));
app.use(require('./middlewares/exposeLoginStatus'));

// -------------------------//
// STEP 3 : Routes handling //
// -------------------------//

// ------ require routes ------ //
const indexRouter = require('./routes/indexRoute');
const profileRouter = require('./routes/userProfileRoute');
// const authRouter = require("./routes/auth")

// ------ PREFIX router ------ //

app.use('/', indexRouter);
app.use('/auth', require('./routes/authRoute'));
app.use('/dashboard', require('./routes/dashboardRoute'));
app.use('/dashboard/myprofile', profileRouter); //

// ---------------------------------//
// STEP 4 : app listen to kickstart //
// ---------------------------------//

// --------  CATCH 404 -------- //

app.use(function (req, res, next) {
  next(createError(404));
});

// --------  ERROR HANDLER -------- //

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3333);

console.log("let's go");

// Cannot connect to .env

// Le changement : Je vais créer un fichier => session => config // Déplacer app.use(session) dedans

module.exports = app;
