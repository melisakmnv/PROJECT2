require("./config/mongodb")

// ------------------------------//
// STEP 1 : Require dependencies //
// ------------------------------//

const express = require("express");
const hbs = require("hbs");
const path = require("path");

// ---------------------//
//  STEP 2 : Base Setup //
// ---------------------//

const app = express();


app.set("view engine", "hbs");
app.set("views", __dirname + "/views")
app.use(express.static(path.join(__dirname , "/public")));
hbs.registerPartials(path.join(__dirname, "views/partials"));
app.use(express.urlencoded({ extended: false })); // So I past this line to be able to read data [object: null prototype {....}]
app.use(express.json({ extended: false})); // This allows to test on postman and display data in terminal ==> {} data empty



// -------------------------//
// STEP 3 : Routes handling //
// -------------------------//

// ------ require routes ------ //
const indexRouter = require("./routes/index");
// const authRouter = require("./routes/auth")


// ------ PREFIX router ------ //

app.use("/", indexRouter);
// app.use("/join", authRouter); 
app.use("/auth", require("./routes/auth"));


// ---------------------------------//
// STEP 4 : app listen to kickstart //
// ---------------------------------//

app.listen(3333);

console.log("let's go");
