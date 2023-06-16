import '../../global.css'
import './FeedStyle.css'

import SocialMediaPost from '../components/post';

const Feed: React.FC = () => {
  const postImage = 'example.jpg';
  const postLikes = 10;
  const postComments = [
    { id: 1, text: 'Great post!', user: { name: 'John Doe', profilePicture: 'john.jpg' } },
    { id: 2, text: 'Nice photo!', user: { name: 'Jane Smith', profilePicture: 'jane.jpg' } },
  ];
  const postShares = 5;
    
      return (
        <div>
          <SocialMediaPost
            image={postImage}
            likes={postLikes}
            comments={postComments}
            shares={postShares}
          />
        </div>
      );
}

export default Feed