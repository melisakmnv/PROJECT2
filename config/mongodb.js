const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => console.log("Connected to the Database :)"));
mongoose.connection.on("error", () => console.log("There is some error of connecting to the Database"));


