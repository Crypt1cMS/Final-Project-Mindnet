import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../global.css';
import './FeedStyle.css';
import CreatePost from '../components/createpost';
import SocialMediaPost from '../components/post';
import Sidebar from '../components/Sidebar';

interface Comment {
  id: number;
  text: string;
  user: {
    name: string;
    profilePicture: string;
  };
}

interface Post {
  id: number;
  image: string;
  likes: number;
  comments: Comment[];
  shares: number;
  caption: string;
  poster: {
    id: number;
    name: string;
    profilePicture: string;
  };
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([] as Post[]); // State to store the posts

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts'); // Replace '/api/posts' with the actual endpoint to retrieve all posts
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostSubmit = (post: Post) => {
    setPosts([...posts, post]); // Append the new post to the existing posts
  };

  return (
    <div id="feed">
      <Sidebar />
      <div className="feed-container">
        <CreatePost onSubmit={handlePostSubmit} /> {/* Pass the handlePostSubmit function as a prop */}
        {/* Render existing posts */}
        {posts.map((post) => (
          <SocialMediaPost
            key={post.id}
            id={post.id}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
            caption={post.caption}
            poster={post.poster}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;