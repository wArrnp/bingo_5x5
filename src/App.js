import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { setGame, resetBoard } from "./actions";
import { makeBingo } from "./utils/makeBingo";
import { Bingo } from "./containers";
import { Modal } from "./components";

class App extends React.Component {
  onClickButton = () => {
    const { setGame } = this.props;
    setGame(makeBingo(25), makeBingo(25));
  };

  onReset = () => {
    const { resetBoard } = this.props;
    resetBoard();
  };

  render() {
    const { started, fstBingoList, sndBingoList } = this.props;
    let result = null;
    if (fstBingoList.length >= 5 && sndBingoList.length >= 5)
      result = "무승부입니다.";
    else {
      if (fstBingoList.length >= 5) result = "1P가 빙고를 완성했습니다.";
      if (sndBingoList.length >= 5) result = "2P가 빙고를 완성했습니다.";
    }
    return (
      <div className="App">
        <Bingo player={1} />
        <Bingo player={2} />
        <button className="bingo--button" onClick={this.onClickButton}>
          {started ? "게임 재시작" : "게임 시작"}
        </button>
        {result && <Modal comment={result} onClick={this.onReset} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  started: state.bingo.started,
  fstBingoList: state.bingo.fstBingoList,
  sndBingoList: state.bingo.sndBingoList
});
const mapDispatchToProps = dispatch => ({
  setGame: (oneP, twoP) => dispatch(setGame(oneP, twoP)),
  resetBoard: () => dispatch(resetBoard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
