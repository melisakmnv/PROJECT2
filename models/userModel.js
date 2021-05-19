const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
      default:
        "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png",
    },
    description: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
  wishlist: [{ type: Schema.Types.ObjectId, ref: "activity" }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
