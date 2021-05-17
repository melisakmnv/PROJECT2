const mongoose = require("mongoose");

mongoose.connect("MONGO_URI = mongodb://localhost/project", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => console.log("Connected to the Database :)"));
mongoose.connection.on("error", () => console.log("There is some error of connecting to the Database"));

