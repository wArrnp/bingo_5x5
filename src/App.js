import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { settingActions, modalActions } from "./actions";
import { makeBingo } from "./utils/makeBingo";
import { Bingo, Modal } from "./containers";

class App extends React.Component {
  onClickButton = () => {
    const { setGame } = this.props.SettingActions;
    setGame(makeBingo(25), makeBingo(25));
  };

  onReset = () => {
    const { resetBoard } = this.props.SettingActions;
    resetBoard();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const {
        firstBingoCompletedLines,
        secondBingoCompletedLines,
        ModalActions
      } = nextProps;
      if (
        firstBingoCompletedLines.length >= 5 &&
        secondBingoCompletedLines.length >= 5
      )
        ModalActions.setModal("draw");
      else {
        if (firstBingoCompletedLines.length >= 5) ModalActions.setModal("1p");
        if (secondBingoCompletedLines.length >= 5) ModalActions.setModal("2p");
      }
    }
  }

  render() {
    const { isStarted } = this.props;
    return (
      <div className="App">
        <Bingo player={1} />
        <Bingo player={2} />
        <button className="bingo--button" onClick={this.onClickButton}>
          {isStarted ? "게임 재시작" : "게임 시작"}
        </button>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isStarted: state.bingo.isStarted,
  firstBingoCompletedLines: state.bingo.firstBingoCompletedLines,
  secondBingoCompletedLines: state.bingo.secondBingoCompletedLines
});
const mapDispatchToProps = dispatch => ({
  SettingActions: bindActionCreators(settingActions, dispatch),
  ModalActions: bindActionCreators(modalActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
