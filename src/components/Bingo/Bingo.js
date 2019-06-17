import React from "react";

import { BingoResult, BingoBoard } from "../../containers";

import "./Bingo.scss";

const Bingo = ({ player, turn }) => {
  return (
    <div>
      <p className="bingo--player">{`${player}p${
        player === turn ? "(턴)" : ""
      }`}</p>
      <BingoBoard player={player} />
      <BingoResult player={player} />
    </div>
  );
};

export default Bingo;
