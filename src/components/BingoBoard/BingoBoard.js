import React from "react";

import "./BingoBoard.scss";

const BingoBoard = ({ cells }) => {
  return <div className="bingo--board--wrapper">{cells}</div>;
};

export default BingoBoard;
