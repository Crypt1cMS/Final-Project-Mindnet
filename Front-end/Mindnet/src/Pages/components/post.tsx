import '../../global.css'

import { useState } from 'react';

const SocialMediaPost = ({ image, likes, comments, shares }) => {
    const [commentText, setCommentText] = useState('');
    const [postComments, setPostComments] = useState(comments);
  
    const handleCommentChange = (event:any) => {
      setCommentText(event.target.value);
    };
  
    const handleCommentSubmit = (event:any) => {
      event.preventDefault();
      if (commentText !== '') {
        const newComment = {
          id: postComments.length + 1,
          text: commentText
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
                <button className="comment-button" type="submit"><img src="../../../public/send-2-svgrepo-com.svg" alt="" /></button>
            </form>
            </div>
            <div className="post-comments">
            {postComments.map((comment:any) => (
                <p key={comment.id}>{comment.text}</p>
            ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default SocialMediaPost;