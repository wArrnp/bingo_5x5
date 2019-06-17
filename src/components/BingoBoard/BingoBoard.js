import React from "react";

import { Modal } from "../index";

import "./BingoBoard.scss";

const BingoBoard = ({ cells, onModal, onCloseModal }) => {
  return (
    <div className="bingo--board--wrapper">
      {cells}
      {onModal && <Modal comment="잘못된 차례입니다." onClick={onCloseModal} />}
    </div>
  );
};

export default BingoBoard;
