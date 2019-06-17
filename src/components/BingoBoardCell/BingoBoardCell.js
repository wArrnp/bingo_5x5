import React from "react";

import "./BingoBoardCell.scss";

const BingoBoardCell = ({ number, isPicked, onClickCell }) => {
  return (
    <div
      onClick={onClickCell}
      className={`board--cell ${isPicked && "picked"}`}
    >
      {number}
    </div>
  );
};

export default BingoBoardCell;
