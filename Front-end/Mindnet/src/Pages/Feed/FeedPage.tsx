import '../../global.css'
import './FeedStyle.css'

import SocialMediaPost from '../components/post';

const Feed: React.FC = () => {
  const postImage = '../../../public/test post image.jpg';
  const postLikes = 10;
  const postComments = [
    { id: 1, text: 'Great post!', user: { name: 'John Doe', profilePicture: '../../../public/Test profile image.png' } },
    { id: 2, text: 'Nice photo!', user: { name: 'Jane Smith', profilePicture: 'jane.jpg' } },
  ];
  const poster = {id: 1, name: 'John', profilePicture: '../../../public/Test profile image.png' }
  const postShares = 5;
    
      return (
        <div>
          <SocialMediaPost
            image={postImage}
            likes={postLikes}
            comments={postComments}
            shares={postShares}
            poster={poster}
          />
        </div>
      );
}

export default Feed