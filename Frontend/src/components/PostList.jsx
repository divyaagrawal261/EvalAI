import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`https://localhost:5001/api/posts?page=${page}&limit=10`);
      const newPosts = response.data.posts;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      if (newPosts.length === 0 || newPosts.length < 10) {
        setHasMore(false);
      }
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">MelodyVerse Posts</h2>
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchPosts}
          hasMore={hasMore}
          loader={<h4 className="text-center text-white">Loading...</h4>}
          endMessage={<p className="text-center text-white bg-black p-1 rounded-lg">No more posts to display</p>}
        >
          {posts.map((post) => (
            <div key={post._id} className="backdrop-blur-sm bg-white bg-opacity-70 text-gray-800 rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/150?img=${post.userId}`} alt="" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">User {post.userId}</div>
                  <div className="text-sm text-gray-500">Posted on {new Date(post.createdAt).toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default PostList;
