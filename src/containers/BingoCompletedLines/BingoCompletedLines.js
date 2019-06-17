import React, { Component } from "react";
import { connect } from "react-redux";
import { BingoCompletedLines } from "../../components";

class BingoCompletedLinesContainer extends Component {
  render() {
    const {
      firstBingoCompletedLines,
      secondBingoCompletedLines,
      player
    } = this.props;
    const completedLinesArray =
      player === 1 ? firstBingoCompletedLines : secondBingoCompletedLines;
    const completedLines = completedLinesArray.map(result => (
      <p className="bingo--completed--lines--bar">{result.join("-")}</p>
    ));
    return <BingoCompletedLines completedLines={completedLines} />;
  }
}

const mapStateToProps = state => ({
  firstBingoCompletedLines: state.bingo.firstBingoCompletedLines,
  secondBingoCompletedLines: state.bingo.secondBingoCompletedLines
});

export default connect(
  mapStateToProps,
  null
)(BingoCompletedLinesContainer);
