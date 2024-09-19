import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recents.css';

const Recents: React.FC = () => {
  const navigate = useNavigate();

  const folders = [
    { label: 'About', path: '/about' },
    { label: 'Art', path: '/art' },
    { label: 'Contact', path: '/contact' },
    { label: 'Dorian', path: '/dorian' },
    { label: 'Work', path: '/work' },
  ];

  return (
    <div className="recents-content">
      <div className="folders-grid">
        {folders.map((folder) => (
          <div key={folder.path} className="folder-item" onClick={() => navigate(folder.path)}>
            <img src="/public/assets/folder.png" alt={folder.label} className="folder-image" />
            <span>{folder.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
