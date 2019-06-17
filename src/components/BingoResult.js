import React from "react";

import "./BingoResult.scss";

const BingoResult = ({ result }) => {
  return <p className="bingo--result--bar">{result.join("-")}</p>;
};

export default BingoResult;
