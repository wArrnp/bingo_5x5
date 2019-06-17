import React, { Component } from "react";
import { connect } from "react-redux";
import { clickCell, toggleTurn } from "../actions/index";
import BoardCell from "../components/BoardCell";

import "./BoardContainer.scss";

class BoardWrapper extends Component {
  onClickCell = ({ number, picked }) => {
    const { clickCell, started, turn, player, toggleTurn } = this.props;
    if (started && turn === player && !picked) {
      clickCell(number);
      toggleTurn(player);
    }
  };
  render() {
    const { player, fstBoard, sndBoard } = this.props;
    const board = player === 1 ? fstBoard : sndBoard;
    const cells = board.map(data => (
      <BoardCell
        number={data.number}
        picked={data.picked}
        onClickCell={() => this.onClickCell(data)}
      />
    ));
    return <div className="board--wrapper">{cells}</div>;
  }
}

const mapStateToProps = state => ({
  fstBoard: state.bingo.fstBoard,
  sndBoard: state.bingo.sndBoard,
  started: state.bingo.started,
  turn: state.bingo.turn
});
const mapDispatchToProps = dispatch => ({
  clickCell: number => dispatch(clickCell(number)),
  toggleTurn: turn => dispatch(toggleTurn(turn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardWrapper);
