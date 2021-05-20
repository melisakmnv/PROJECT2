const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: 'user' },
    title: String,
    description: String,
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    id_activity: [{ type: Schema.Types.ObjectId, ref: 'activity' }],
  },
  { timestamps: true }
);
const CommentModel = mongoose.model('comment', commentSchema);
module.exports = CommentModel;
