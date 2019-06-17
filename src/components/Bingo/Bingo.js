import React from "react";

import { BingoResult, Board as BoardContainer } from "../../containers";

import "./Bingo.scss";

const Bingo = ({ player, turn }) => {
  return (
    <div>
      <p className="bingo--player">{`${player}p${
        player === turn ? "(턴)" : ""
      }`}</p>
      <BoardContainer player={player} />
      <BingoResult player={player} />
    </div>
  );
};

export default Bingo;
