import React, { Component } from "react";
import { connect } from "react-redux";

import "./BingoContainer.scss";
import { BingoResult, Board } from "../";

class BingoContainer extends Component {
  render() {
    const { player, turn } = this.props;
    return (
      <div>
        <p className="bingo--player">{`${player}p${
          player === turn ? "(턴)" : ""
        }`}</p>
        <Board player={player} />
        <BingoResult player={player} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  turn: state.bingo.turn
});

export default connect(
  mapStateToProps,
  null
)(BingoContainer);
