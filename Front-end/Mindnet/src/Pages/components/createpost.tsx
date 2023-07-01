import React, { useState } from 'react';
import axios from 'axios';


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
  
interface CreatePostProps {
  onSubmit: (post: Post) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onSubmit }) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (image && caption !== '') {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('caption', caption);

      try {
        const response = await axios.post('/api/posts', formData); // reemplazar con el endpoint
        const post: Post = response.data.post;
        onSubmit(post);
      } catch (error) {
        console.error('Error creating post:', error);
      }

      setCaption('');
      setImage(null);
    }
  };

  return (
    <div>
      <form id="create-post" onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={handleCaptionChange}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
