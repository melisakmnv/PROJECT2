const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  category: {
    type: String,
    enum: ["Restaurant", "Nature", "Culture", "City"],
  },
  accessibility: [String],
  itinerary: String,
  city_name: { type: String, required: true },
  city_photo: [String],
  activity_name: String,
  activity_photo: [String],
  id_tags: { type: Schema.Types.ObjectId, ref: "tag", required: true },
  description: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "user" },
  id_comments: [{ type: Schema.Types.ObjectId, ref: "comment"}],
});

const ActivityModel = mongoose.model("activity", activitySchema);
module.exports = ActivityModel;
