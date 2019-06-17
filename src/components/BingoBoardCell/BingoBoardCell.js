import React from "react";

import "./BingoBoardCell.scss";

const BoardCell = ({ number, picked, onClickCell }) => {
  return (
    <div onClick={onClickCell} className={`board--cell ${picked && "picked"}`}>
      {number}
    </div>
  );
};

export default BoardCell;
