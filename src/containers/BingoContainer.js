import React, { Component } from "react";
import BoardContainer from "./BoardContainer";
import { connect } from "react-redux";

import "./BingoContainer.scss";
import BingoResultContainer from "./BingoResultContainer";

class BingoWrapper extends Component {
  render() {
    const { player, turn } = this.props;
    return (
      <div>
        <p className="bingo--player">{`${player}p${
          player === turn ? "(턴)" : ""
        }`}</p>
        <BoardContainer player={player} />
        <BingoResultContainer player={player} />
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
)(BingoWrapper);
