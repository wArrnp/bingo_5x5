import React from "react";

import "./BingoCompletedLines.scss";

const BingoCompletedLines = ({ completedLines }) => {
  return (
    <div className="bingo--completed--lines--wrapper">
      <p className="bingo--completed--lines--title">완성 줄</p>
      {completedLines}
    </div>
  );
};

export default BingoCompletedLines;
