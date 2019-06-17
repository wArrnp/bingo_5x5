import React, { Component } from "react";
import { connect } from "react-redux";
import { BingoResult, BingoResultList } from "../../components";

class BingoResultContainer extends Component {
  render() {
    const { fstBingoList, sndBingoList, player } = this.props;
    const result = player === 1 ? fstBingoList : sndBingoList;
    const resultItems = result.map(result => <BingoResult result={result} />);
    return <BingoResultList resultItems={resultItems} />;
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
