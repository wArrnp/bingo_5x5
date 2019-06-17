import React, { Component } from "react";
import { connect } from "react-redux";
import BingoResult from "../components/BingoResult";

import "./BingoResultContainer.scss";

class BingoResultContainer extends Component {
  render() {
    const { fstBingoList, sndBingoList, player } = this.props;
    const result = player === 1 ? fstBingoList : sndBingoList;
    const resultBars = result.map(result => <BingoResult result={result} />);
    return (
      <div className="bingo--result--wrapper">
        <p className="bingo--result--title">완성 줄</p>
        {resultBars}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fstBingoList: state.bingo.fstBingoList,
  sndBingoList: state.bingo.sndBingoList
});

export default connect(
  mapStateToProps,
  null
)(BingoResultContainer);
