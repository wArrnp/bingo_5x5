import React, { Component } from "react";
import { connect } from "react-redux";
import { playingActions } from "../../actions";
import { bindActionCreators } from "redux";
import { BingoBoardCell, BingoBoard } from "../../components";

class BingoBoardContainer extends Component {
  state = {
    onModal: false
  };

  onClickCell = ({ number, picked }) => {
    const { isStarted, turn, player, PlayingActions } = this.props;
    const { clickCell } = PlayingActions;
    if (isStarted && turn === player && !picked) {
      clickCell(number, player);
    } else if (isStarted && turn !== player) {
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
    const { player, firstBoard, secondBoard } = this.props;
    const { onModal } = this.state;
    const board = player === 1 ? firstBoard : secondBoard;
    const cells = board.map(data => (
      <BingoBoardCell
        number={data.number}
        isPicked={data.isPicked}
        onClickCell={() => this.onClickCell(data)}
      />
    ));
    return (
      <BingoBoard
        cells={cells}
        onModal={onModal}
        onCloseModal={this.onCloseModal}
      />
    );
  }
}

const mapStateToProps = state => ({
  firstBoard: state.bingo.firstBoard,
  secondBoard: state.bingo.secondBoard,
  isStarted: state.bingo.isStarted,
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
)(BingoBoardContainer);
