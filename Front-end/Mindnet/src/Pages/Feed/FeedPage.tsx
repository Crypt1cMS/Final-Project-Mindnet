import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../global.css';
import './FeedStyle.css';
import CreatePost from '../components/createpost';
import SocialMediaPost from '../components/post';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/navbar';

interface Post {
  _id: string;
  caption: string;
  picture: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // State to store the posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/publicaciones');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostSubmit = async (post: Post) => {
    try {
      const response = await axios.post('/api/posts', post); // Replace '/api/posts' with the actual endpoint to create a post
      setPosts([...posts, response.data]); // Append the new post to the existing posts
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div id="feed">
      <Sidebar />
      <NavBar />
      <div className="feed-container">
        <CreatePost handlePostSubmit={handlePostSubmit} />
        {posts.map((post) => (
          <SocialMediaPost
            key={post._id}
            id={post._id}
            picture={post.picture}
            likes={0} // Set your desired initial values
            comments={[]}
            shares={0} // Set your desired initial values
            caption={post.caption}
            poster={{
              id: 1, // Set the desired user ID
              name: 'John Doe', // Set the desired user name
              profilePicture: 'profile-picture.jpg', // Set the desired user profile picture URL
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
