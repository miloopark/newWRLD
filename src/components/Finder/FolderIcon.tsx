import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FolderIcon.css';

interface FolderIconProps {
  label: string;
  path: string;
}

const FolderIcon: React.FC<FolderIconProps> = ({ label, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="folder-icon" onClick={handleClick}>
      <img src="/public/assets/folder.png" alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default FolderIcon;
