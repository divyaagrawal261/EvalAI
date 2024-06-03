import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    ref: 'User',
    // required: true,
    default:"Random"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Post', PostSchema);
