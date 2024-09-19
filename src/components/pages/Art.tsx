import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Art.css';

const Art: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const folders = [
    { label: 'Clay', path: '/art/clay' },
    { label: 'Graphic Design', path: '/art/graphic-design' },
    { label: 'Photography', path: '/art/photography' },
    { label: 'Sketches', path: '/art/sketches' },
  ];

  const graphicDesignImages = [
    { src: '/public/assets/pic1.png', subtitle: 'Graphic Design Pic 1' },
    { src: '/public/assets/pic2.png', subtitle: 'Graphic Design Pic 2' },
    { src: '/public/assets/pic3.png', subtitle: 'Graphic Design Pic 3' },
    { src: '/public/assets/pic4.png', subtitle: 'Graphic Design Pic 4' },
    { src: '/public/assets/pic5.png', subtitle: 'Graphic Design Pic 5' },
    { src: '/public/assets/pic6.png', subtitle: 'Graphic Design Pic 6' },
  ];

  const handleFolderClick = (label: string) => {
    navigate(`/art/${label.toLowerCase().replace(' ', '-')}`);
  };

  const handleImageClick = (imageSrc: string) => {
    navigate(`${location.pathname}?preview=${encodeURIComponent(imageSrc)}`);
  };

  const closePreview = () => {
    navigate(-1);
  };

  const previewImage = new URLSearchParams(location.search).get('preview');

  return (
    <div className="art-content">
      {previewImage ? (
        <div className="preview-overlay" onClick={closePreview}>
          <img src={decodeURIComponent(previewImage)} alt="Preview" className="preview-image" />
        </div>
      ) : location.pathname === '/art/graphic-design' ? (
        <div className="images-grid">
          {graphicDesignImages.map((image, index) => (
            <div key={index} className="image-item" onClick={() => handleImageClick(image.src)}>
              <img src={image.src} alt={image.subtitle} className="image-thumbnail" />
              <span className="image-subtitle">{image.subtitle}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="folders-grid">
          {folders.map((folder) => (
            <div key={folder.path} className="folder-item" onClick={() => handleFolderClick(folder.label)}>
              <img src="/public/assets/folder.png" alt={folder.label} className="folder-image" />
              <span>{folder.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Art;
