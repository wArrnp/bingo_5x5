import React, { Component } from "react";
import { connect } from "react-redux";
import { clickCell, toggleTurn } from "../actions/index";
import BoardCell from "../components/BoardCell";

import "./BoardContainer.scss";
import Modal from "../components/Modal";

class BoardWrapper extends Component {
  state = {
    onModal: false
  };

  onClickCell = ({ number, picked }) => {
    const { clickCell, started, turn, player, toggleTurn } = this.props;
    if (started && turn === player && !picked) {
      clickCell(number);
      toggleTurn(player);
    } else if (started && turn !== player) {
      this.setState({
        onModal: true
      });
    }
  };

  onCloseModal = () => {
    this.setState({
      onModal: false
    });
  };
  render() {
    const { player, fstBoard, sndBoard } = this.props;
    const { onModal } = this.state;
    const board = player === 1 ? fstBoard : sndBoard;
    const cells = board.map(data => (
      <BoardCell
        number={data.number}
        picked={data.picked}
        onClickCell={() => this.onClickCell(data)}
      />
    ));
    return (
      <div className="board--wrapper">
        {cells}
        {onModal && (
          <Modal comment="잘못된 차례입니다." onClick={this.onCloseModal} />
        )}
      </div>
    );
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
