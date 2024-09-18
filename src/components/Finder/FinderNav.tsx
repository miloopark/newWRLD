import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FinderNav.css';

const FinderNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="finder-nav">
      <button onClick={() => navigate(-1)} disabled={location.pathname === '/'}>
        &larr; 
      </button>
      <button onClick={() => navigate(1)}>&rarr; </button>
    </div>
  );
};

export default FinderNav;
