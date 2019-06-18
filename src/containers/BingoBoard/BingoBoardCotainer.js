import React, { Component } from "react";
import { connect } from "react-redux";
import { playingActions, modalActions } from "../../actions";
import { bindActionCreators } from "redux";
import { BingoBoardCell, BingoBoard } from "../../components";

class BingoBoardContainer extends Component {
  onClickCell = ({ number, isPicked }) => {
    const {
      isStarted,
      turn,
      player,
      PlayingActions,
      ModalActions
    } = this.props;
    const { clickCell } = PlayingActions;
    if (isStarted && turn === player && !isPicked) {
      clickCell(number, player);
    } else if (isStarted && turn !== player) {
      ModalActions.setModal("no-turn");
    }
  };

  render() {
    const { player, firstBoard, secondBoard } = this.props;
    const board = player === 1 ? firstBoard : secondBoard;
    const cells = board.map((data, index) => (
      <BingoBoardCell
        number={data.number}
        isPicked={data.isPicked}
        onClickCell={() => this.onClickCell(data)}
        key={`${index}-${player}`}
      />
    ));
    return <BingoBoard cells={cells} onCloseModal={this.onCloseModal} />;
  }
}

const mapStateToProps = state => ({
  firstBoard: state.bingo.firstBoard,
  secondBoard: state.bingo.secondBoard,
  isStarted: state.bingo.isStarted,
  turn: state.bingo.turn
});
const mapDispatchToProps = dispatch => ({
  PlayingActions: bindActionCreators(playingActions, dispatch),
  ModalActions: bindActionCreators(modalActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BingoBoardContainer);
