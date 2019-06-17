import React from "react";

import "./Modal.scss";

const Modal = ({ comment, onClick }) => {
  return (
    <div className="modal--wrapper">
      <div className="modal--inner--wrapper">
        <span>{comment}</span>
        <button className="modal--button" onClick={onClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
