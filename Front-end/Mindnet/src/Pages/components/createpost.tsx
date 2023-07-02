import { useState } from 'react';
import axios from 'axios';


const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [picture, setPicture] = useState(null);

  const handleCaptionChange = (e:any) => {
    setCaption(e.target.value);
  };

  const handlePictureChange = (e:any) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension === 'png' || extension === 'jpg') {
        setPicture(file);
      } else {
        alert('Please select a PNG or JPG image.');
      }
    }
  };

  const handleSubmit = () => {
    const url = "http://localhost:9000/api/publicar";
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('picture', picture);

    axios
      .post(url, formData)
      .then((response) => {
        const newPost = response.data;
        onSubmit(newPost); // Call the onSubmit prop function with the new post data
        console.log('Payload:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form>
        <div>
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
          />
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <input type="file" accept=".png, .jpg" id="picture" onChange={handlePictureChange} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
