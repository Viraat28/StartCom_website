import React from 'react';
import './Modal.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <button className="Modal__closeButton" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
