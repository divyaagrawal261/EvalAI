import mongoose from 'mongoose';
import Post from './models/Post.js'; // Adjust the path to your Post model

const generateSamplePosts = async () => {
  try {
    await mongoose.connect("mongodb+srv://divyaagrawal0747:di501vya@backend.kuxr4vt.mongodb.net/", {});

    const samplePosts = [];

    for (let i = 1; i <= 70; i++) {
      samplePosts.push({
        title: `Sample Post ${i}`,
        body: `This is the body of sample post number ${i}. It contains some example text to simulate a real post.`,
        userId: Math.floor(Math.random() * 10) + 1, // Random userId between 1 and 10
        createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)), // Random date within the last ~30 years
      });
    }

    await Post.insertMany(samplePosts);
    console.log('Sample posts created successfully!');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error generating sample posts:', error);
  }
};

generateSamplePosts();
