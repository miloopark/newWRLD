import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import Finder from './components/Finder/Finder';
import ErrorModal from './components/error/ErrorModal';
import Video from '../public/assets/background-video.mp4';
import Wrapper from '../public/assets/wrappingborder.png';
import FinderIcon from '../public/assets/finder-icon.png'
import './App.css';

interface WindowState {
  id: number;
  currentFolder: string;
}

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([{ id: 1, currentFolder: '/recents' }]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const openNewFinderWindow = () => {
    if (windows.length > 0) {
      setShowErrorModal(true); // Show error modal if there's already one window open
    } else {
      setWindows([...windows, { id: windows.length + 1, currentFolder: '/recents' }]);
    }
  };

  const closeFinderWindow = (id: number) => {
    setWindows(windows.filter(window => window.id !== id));
  };

  const updateWindowState = (id: number, newFolder: string) => {
    setWindows(windows.map(window => window.id === id ? { ...window, currentFolder: newFolder } : window));
  };

  const handleIgnore = () => {
    setShowErrorModal(false);
  };

  return (
    <Router>
      <video src={Video} autoPlay loop muted className="background-video" />
      <img src={Wrapper} className="wrapping-border"/>
      <div className="finder-icon" onDoubleClick={openNewFinderWindow}>
        <img src={FinderIcon} alt="Finder Icon" />
      </div>
      {windows.map(window => (
        <Finder
          key={window.id}
          id={window.id}
          currentFolder={window.currentFolder}
          closeWindow={closeFinderWindow}
          updateWindowState={updateWindowState}
        />
      ))}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other global routes can be added here if needed */}
      </Routes>
      {showErrorModal && <ErrorModal onIgnore={handleIgnore} />}
    </Router>
  );
};

export default App;
