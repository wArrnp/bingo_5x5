import React, { Component } from "react";
import { connect } from "react-redux";
import { playingActions } from "../../actions";
import { bindActionCreators } from "redux";
import { BoardCell, Board } from "../../components";

class BoardContainer extends Component {
  state = {
    onModal: false
  };

  onClickCell = ({ number, picked }) => {
    const { started, turn, player, PlayingActions } = this.props;
    const { clickCell } = PlayingActions;
    if (started && turn === player && !picked) {
      clickCell(number, player);
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
      <Board cells={cells} onModal={onModal} onCloseModal={this.onCloseModal} />
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
  PlayingActions: bindActionCreators(playingActions, dispatch)
  // clickCell: number => dispatch(clickCell(number)),
  // toggleTurn: turn => dispatch(toggleTurn(turn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
