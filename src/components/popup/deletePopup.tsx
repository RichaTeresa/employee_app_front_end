import React, { type MouseEventHandler } from 'react';
import './deletePopup.css'; 
import closeLogo from "../../assets/close (1).svg"

export const DeletePopup = ({ isOpen, onClose, onConfirm }:{isOpen:boolean,onClose:()=>void,onConfirm:MouseEventHandler<HTMLButtonElement>}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <img src={closeLogo} className='closeLogo'></img>
        </button>
        <h2 className="modal-title">Are you sure ?</h2>
        <p className="modal-message">Do you really want to delete employee ?</p>
        <div className="modal-buttons">
          <button className="modal-confirm" onClick={onConfirm}>Confirm</button>
          <button className="modal-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};



