import React from "react";

import "./Modal.scss";

const Modal = ({ result, onReset }) => {
  return (
    <div className="modal--wrapper">
      <div className="modal--inner--wrapper">
        <span>{result}</span>
        <button className="modal--button" onClick={onReset}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
