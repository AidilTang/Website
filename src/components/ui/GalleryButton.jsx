import React from 'react';

const GalleryButton = ({ onClick, text = "View" }) => {
  return (
    <button className="gallery-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default GalleryButton;