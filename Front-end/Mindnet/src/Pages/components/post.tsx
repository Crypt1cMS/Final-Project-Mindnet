import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Comment {
  id: number;
  text: string;
  user: {
    name: string;
    profilePicture: string;
  };
}

interface SocialMediaPostProps {
  image: string;
  likes: number;
  comments: Comment[];
  shares: number;
}

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({
  image,
  likes,
  comments,
  shares,
}) => {
  const [commentText, setCommentText] = useState('');
  const [postComments, setPostComments] = useState<Comment[]>(comments);

  const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (commentText !== '') {
      const newComment: Comment = {
        id: postComments.length + 1,
        text: commentText,
        user: {
          name: 'John Doe', // Replace with the user's name
          profilePicture: 'profile-picture.jpg', // Replace with the user's profile picture URL
        },
      };
      setPostComments([...postComments, newComment]);
      setCommentText('');
    }
  };

  return (
    <div id="posts-wrapper">
      <div className="social-media-post-card">
        <img className="post-image" src={image} alt="Post" />

        <div className="post-buttons">
          <button>{likes} Like</button>
          <button>{comments.length} Comment</button>
          <button>{shares} Share</button>
        </div>

        <div className="comment-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              className="comment-input"
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={handleCommentChange}
            />
            <button className="comment-button" type="submit">
              <img src="../../../public/send-2-svgrepo-com.svg" alt="" />
            </button>
          </form>
        </div>

        <div className="post-comments">
          {postComments.map((comment) => (
            <div key={comment.id}>
              <img
                className="comment-profile-picture"
                src={comment.user.profilePicture}
                alt="Profile"
              />
              <p>
                <span className="comment-username">{comment.user.name}</span>{' '}
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;
