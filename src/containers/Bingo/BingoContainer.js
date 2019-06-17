import React, { Component } from "react";
import { connect } from "react-redux";

import { Bingo } from "../../components";

class BingoContainer extends Component {
  render() {
    const { player, turn } = this.props;
    return <Bingo player={player} turn={turn} />;
  }
}

const mapStateToProps = state => ({
  turn: state.bingo.turn
});

export default connect(
  mapStateToProps,
  null
)(BingoContainer);
