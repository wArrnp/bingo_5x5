import React from "react";

import "./BingoResultList.scss";

const BingoResultList = ({ resultItems }) => {
  return (
    <div className="bingo--result--wrapper">
      <p className="bingo--result--title">완성 줄</p>
      {resultItems}
    </div>
  );
};

export default BingoResultList;
