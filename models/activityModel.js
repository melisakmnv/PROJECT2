const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({

category: { type: String, enum: ["Restaurant", "Nature", "Culture"], required: true },
accessibility: { type: String, enum: ["Plane", "Train", "Bus", "Bicycle", "Walk"], required: true},
itinerary: String,
city: {type : String, required : true},
photo_city: [String],
photo_category: [String],
id_tags: [{ type: Schema.Types.ObjectId, ref: "tag", required: true }],
description: {type : String, required : true},
creator: [{ type: Schema.Types.ObjectId, ref: "user" }],

});

const ActivityModel = mongoose.model("activity", activitySchema);
module.exports = ActivityModel;
