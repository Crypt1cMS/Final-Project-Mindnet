import React, { useState } from 'react';
import Modal from 'react-modal';

interface Comment {
  id: number;
  text: string;
  user: {
    name: string;
    profilePicture: string;
  };
}

interface SocialMediaPostProps {
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

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({
  image,
  likes,
  comments,
  shares,
  caption,
  poster,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [commentText, setCommentText] = useState('');
  const [postComments, setPostComments] = useState<Comment[]>(comments);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  // Custom styles for the modal
  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: 'none',
      zIndex: 9999,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#929292',
      border: 'none',
      width: '100%',
      height: '100%',
      padding: '0',
      display: 'flex',
    },
  };

  return (
    <div id="post-wrapper">
      <div className="social-media-post-card">
        <img
          className="post-image"
          src={image}
          alt="Post"
          onClick={() => openModal(image)}
        />

        <div className="post-buttons">
          <button className="like-btn">{likes} Me gusta</button>
          <button className="comment-btn">{comments.length} Comentar</button>
          <button className="share-btn">{shares} Compartir</button>
        </div>

        <div className="post-comments">
          {comments.map((comment) => (
            <div className="post-comment" key={comment.id}>
              <img
                className="comment-profile-picture"
                src={comment.user.profilePicture}
                alt="Profile"
              />
              <div className="comment-text">
                <h4 className="comment-username">{comment.user.name}</h4>{' '}
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={modalStyles} // Apply custom styles to the modal
      >
        <img src={selectedImage} alt="Modal" className='modal-image' />
        <div className="modal-sidebar">
          <div className="post-info">
            <div className="poster-info">
              <img
                className="poster-profile-picture"
                src={poster.profilePicture}
                alt="Profile"
              />
              <div className="post-text">
                <h4 className="poster-username">{poster.name}</h4>
                <p className="post-caption">{caption}</p>
              </div>
            </div>

            <div className="modal-buttons">
              <button className="like-btn">{likes} Me gusta</button>
              <button className="comment-btn">
                {comments.length} Comentar
              </button>
              <button className="share-btn">{shares} Compartir</button>
            </div>
          </div>
          <div className="comment-section">
            <div className="modal-comments">
              {postComments.map((comment) => (
                <div className="modal-comment" key={comment.id}>
                  <img
                    className="comment-profile-picture"
                    src={comment.user.profilePicture}
                    alt="Profile"
                  />
                  <div className="comment-text">
                    <h4 className="comment-username">{comment.user.name}</h4>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>


          </div>
          <form className="comment-form" onSubmit={handleCommentSubmit}>
              <input
                className='comment-input'
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={handleCommentChange}
              />
              <button type="submit">Post Comment</button>
            </form>
        </div>
      </Modal>
    </div>
  );
};

export default SocialMediaPost;
