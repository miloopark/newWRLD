import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable'; // Ensure this is imported
import FinderNav from './FinderNav';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import Recents from '../pages/Recents';
import About from '../pages/About';
import Art from '../pages/Art';
import Contact from '../pages/Contact';
import Dorian from '../pages/Dorian';
import Work from '../pages/Work';
import './Finder.css';

interface FinderProps {
  id: number;
  currentFolder: string;
  closeWindow: (id: number) => void;
  updateWindowState: (id: number, newFolder: string) => void;
}

const Finder: React.FC<FinderProps> = ({ id, currentFolder, closeWindow, updateWindowState }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Navigate to /recents when the Finder component mounts
    if (location.pathname === '/') {
      navigate('/recents');
    }
  }, [location, navigate]);

  useEffect(() => {
    // Update window state when route changes
    updateWindowState(id, location.pathname);
  }, [location.pathname, id, updateWindowState]);

  const handleFolderClick = (path: string) => {
    navigate(path); // Change route without refreshing the page
  };

  const folders = [
    { label: 'Recents', path: '/recents' },
    { label: 'About', path: '/about' },
    { label: 'Art', path: '/art' },
    { label: 'Contact', path: '/contact' },
    { label: 'Dorian', path: '/dorian' },
    { label: 'Work', path: '/work' },
  ];

  return (
    <Draggable handle=".finder-header" cancel=".react-resizable-handle">
      <ResizableBox
        width={800}
        height={600}
        minConstraints={[300, 200]}
        maxConstraints={[window.innerWidth, window.innerHeight]}
        className="finder-window"
        resizeHandles={['se']}
      >
        <div className="finder-header">
          <div className="finder-controls">
            <div className="control-button close" onClick={() => closeWindow(id)}></div>
            <div className="control-button minimize" onClick={() => handleFolderClick(currentFolder)}></div>
            <div className="control-button maximize"></div>
          </div>
          <FinderNav />
        </div>
        <div className="finder-body">
          <div className="finder-sidebar">
            <ul>
              {folders.map(folder => (
                <li
                  key={folder.path}
                  onClick={() => handleFolderClick(folder.path)}
                  className={currentFolder === folder.path ? 'active' : ''}
                >
                  {folder.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="finder-content">
            <Routes>
              <Route path="/recents" element={<Recents />} />
              <Route path="/about" element={<About />} />
              <Route path="/art" element={<Art />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dorian" element={<Dorian />} />
              <Route path="/work" element={<Work />} />
            </Routes>
          </div>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Finder;