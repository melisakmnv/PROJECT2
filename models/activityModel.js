const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({

category: { type: String, enum: ["Les restos", "Coin nature", "Culturel"] },
accessibility: { type: String, enum: ["Avion", "Train", "Bus", "Vélo", "Marche"] },
location: String,
photos: [String],
id_tags: [{ type: Schema.Types.ObjectId, ref: "tag" }],
description: String,
creator: [{ type: Schema.Types.ObjectId, ref: "user" }],

});

const ActivityModel = mongoose.model("activity", activitySchema);
module.exports = ActivityModel;
