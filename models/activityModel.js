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
  city_photo: [{type : String, default:"https://www.pewtrusts.org/-/media/post-launch-images/2020/04/sotc-2020_main.jpg?h=1074&w=1820&la=fr&hash=DA8990669C6A39107E02AB2C149A2EED"}],
  activity_name: String,
  activity_photo: [{type : String, default:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-walking-dog-royalty-free-image-1603229590.jpg"}],
  id_tags: { type: Schema.Types.ObjectId, ref: "tag", required: true },
  description: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "user" },
  id_comments: [{ type: Schema.Types.ObjectId, ref: "comment"}],
});

const ActivityModel = mongoose.model("activity", activitySchema);
module.exports = ActivityModel;
