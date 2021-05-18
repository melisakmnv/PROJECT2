const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    label: String,
});

const ProfileModel = mongoose.model("profile", profileSchema);
module.exports = ProfileModel;