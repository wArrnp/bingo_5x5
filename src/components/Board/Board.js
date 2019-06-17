import React from "react";

import { Modal } from "../index";

import "./Board.scss";

const Board = ({ cells, onModal, onCloseModal }) => {
  return (
    <div className="board--wrapper">
      {cells}
      {onModal && <Modal comment="잘못된 차례입니다." onClick={onCloseModal} />}
    </div>
  );
};

export default Board;
