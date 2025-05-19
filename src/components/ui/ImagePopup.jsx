import React, { useEffect, useState, useRef } from 'react';

const ImagePopup = ({ isVisible, images, currentIndex, onClose, onChangeImage }) => {
  const [isImageFading, setIsImageFading] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);
  
  // Add body class when popup is visible to prevent scrolling
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
    return () => {
      document.body.classList.remove('popup-open');
    };
  }, [isVisible]);
  
  // Check image size on load and when image changes
  useEffect(() => {
    const checkImageSize = () => {
      if (imageRef.current) {
        // Get natural dimensions
        const { naturalWidth, naturalHeight } = imageRef.current;
        setImageSize({ width: naturalWidth, height: naturalHeight });
      }
    };
    
    // Reset image size when changing images
    setImageSize({ width: 0, height: 0 });
    
    // Check image size after it loads
    if (imageRef.current) {
      if (imageRef.current.complete) {
        checkImageSize();
      } else {
        imageRef.current.onload = checkImageSize;
      }
    }
    
    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null;
      }
    };
  }, [currentIndex, images]);
  
  // Handle image transitions
  const handleImageChange = (direction) => {
    setIsImageFading(true);
    setTimeout(() => {
      onChangeImage(direction);
      setIsImageFading(false);
    }, 300); // Match with CSS transition timing
  };
  
  // Handle ESC key to close popup
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isVisible) {
        onClose();
      } else if (event.key === 'ArrowLeft' && isVisible) {
        handleImageChange(-1);
      } else if (event.key === 'ArrowRight' && isVisible) {
        handleImageChange(1);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isVisible, onClose, handleImageChange]);
  
  // Determine if the image is small and should be enlarged
  const isSmallImage = imageSize.width < 500 || imageSize.height < 500;
  
  if (!isVisible || images.length === 0) return null;
  
  return (
    <>
      <div className="overlay visible" onClick={onClose}></div>
      <div className={`popup-container ${isVisible ? 'visible' : ''}`}>
        <button className="close-button" onClick={onClose}>✖</button>
        <button 
          className="nav-button" 
          id="prevBtn" 
          onClick={() => handleImageChange(-1)}
        >
          &lt;
        </button>
        
        {/* Image container with consistent sizing */}
        <div className="image-frame">
          <img 
            ref={imageRef}
            id="popupImage" 
            className={`popup-image ${isImageFading ? 'fade' : ''} ${isSmallImage ? 'small-image' : ''}`} 
            src={images[currentIndex]} 
            alt={`Gallery image ${currentIndex + 1}`} 
          />
        </div>
        
        <button 
          className="nav-button" 
          id="nextBtn" 
          onClick={() => handleImageChange(1)}
        >
          &gt;
        </button>
        
        <div className="debug-info">
          <span>{currentIndex + 1} / {images.length}</span>
          {imageSize.width > 0 && (
            <span>{imageSize.width} x {imageSize.height}</span>
          )}
        </div>
      </div>
      
      {/* Add this CSS to your stylesheet */}
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease;
        }
        
        .overlay.visible {
          opacity: 1;
          visibility: visible;
        }
        
        .popup-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1001;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease;
        }
        
        .popup-container.visible {
          opacity: 1;
          visibility: visible;
        }
        
        .close-button {
          position: absolute;
          top: -40px;
          right: -40px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 20px;
          cursor: pointer;
          z-index: 1002;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }
        
        .close-button:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        
        .nav-button {
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 24px;
          cursor: pointer;
          margin: 0 20px;
          z-index: 1002;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }
        
        .nav-button:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        
        .image-frame {
          width: 80vw;
          height: 80vh;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          overflow: hidden;
        }
        
        .popup-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* This ensures aspect ratio is maintained */
          transition: opacity 0.3s ease;
        }
        
        .popup-image.small-image {
          min-width: 60%; /* Make small images appear larger */
          min-height: 60%; /* Make small images appear larger */
        }
        
        .popup-image.fade {
          opacity: 0;
        }
        
        .debug-info {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 14px;
          padding: 5px 15px;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 20px;
          display: flex;
          gap: 10px;
        }
        
        /* Prevents body scrolling when popup is open */
        body.popup-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default ImagePopup;