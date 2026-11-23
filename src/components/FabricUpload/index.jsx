
import { useState } from 'react';
import './index.css';

const FabricUpload = () => {

  const [fabricImage, setFabricImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageUpload = (event) => {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    // Check image format
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image.');
      return;
    }

    // Check file size (5 MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5 MB.');
      return;
    }

    setError('');

    const imageURL = URL.createObjectURL(file);

    setFabricImage(imageURL);
  };

  const removeImage = () => {
    if (fabricImage) {
      URL.revokeObjectURL(fabricImage);
    }

    setFabricImage(null);
    setError('');

    const input = document.getElementById('fabric-input');

    if (input) {
      input.value = '';
    }
  };

  return (
    <div className="fabric-upload">

      <div className="upload-heading">
        <p>LET YOUR CREATIVITY BEGIN</p>

        <h1>Upload Your Fabric</h1>

        <span>
          Bring your fabric to life with beautiful outfit designs.
        </span>
      </div>

      <div className="upload-container">

        {!fabricImage ? (

          <label
            htmlFor="fabric-input"
            className="upload-box"
          >

            <div className="upload-icon">↑</div>

            <h2>Upload Your Fabric Image</h2>

            <p>
              Choose an image from your computer
            </p>

            <span className="choose-button">
              Choose Image
            </span>

            <small>
              Supported formats: JPG, PNG, WEBP | Maximum 5 MB
            </small>

          </label>

        ) : (

          <div className="preview-container">

            <h2>Your Fabric Preview</h2>

            <img
              src={fabricImage}
              alt="Uploaded fabric"
              className="fabric-preview"
            />

            <div className="preview-buttons">

              <label
                htmlFor="fabric-input"
                className="replace-button"
              >
                Replace Image
              </label>

              <button
                onClick={removeImage}
                className="remove-button"
              >
                Remove Image
              </button>

            </div>

          </div>

        )}

        <input
          type="file"
          id="fabric-input"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleImageUpload}
          hidden
        />

        {error && (
          <p className="upload-error">{error}</p>
        )}

      </div>

    </div>
  );
};

export default FabricUpload;
