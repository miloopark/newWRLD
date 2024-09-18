import React from 'react';
import './ErrorModal.css';

interface ErrorModalProps {
  onIgnore: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ onIgnore }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>stop spamming the button loser</h2>
        <p>Click Ignore to Go Back.</p>
        <div className="modal-buttons">
          <button onClick={onIgnore} className="ignore-button">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;