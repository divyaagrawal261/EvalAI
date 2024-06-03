// controllers/postController.js
import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalPosts = await Post.countDocuments();
    const totalPages = Math.ceil(totalPosts / limit);

    res.json({
      posts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        totalPosts,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

export const createPost = async (req, res) => {
  const { title, body, userId } = req.body;

  try {
    const newPost = new Post({
      title,
      body,
      userId,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
