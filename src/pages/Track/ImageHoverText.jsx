import React, { useState } from 'react';
import './ImageHoverText.css';

const ImageHoverText = ({ imageUrl, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-hover-text-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={hoverText} className="image-hover-text-img" />
      {isHovered && (
        <div className="image-hover-text">
          <span>{hoverText}</span>
        </div>
      )}
    </div>
  );
};

export default ImageHoverText;