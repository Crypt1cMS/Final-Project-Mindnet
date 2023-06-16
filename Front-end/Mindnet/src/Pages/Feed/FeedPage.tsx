import '../../global.css'
import './FeedStyle.css'

import SocialMediaPost from '../components/post';

function Feed() {

    const post = {
        image: '../../../public/test post image.jpg',
        likes: 10,
        comments: [
          { id: 1, text: 'Great post!' },
          { id: 2, text: 'I love it!' }
        ],
        shares: 5
      };
    
      return (
        <div>
          <SocialMediaPost
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        </div>
      );
}

export default Feed