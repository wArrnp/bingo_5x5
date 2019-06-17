import React, { Component } from "react";
import { resetBoard } from "../actions";
import { connect } from "react-redux";

import Modal from "../components/Modal";

class ModalContainer extends Component {
  onReset = () => {
    const { resetBoard } = this.props;
    resetBoard();
  };
  render() {
    const { result } = this.props;
    return <Modal result={result} onReset={this.onReset} />;
  }
}

const mapDisptchToProps = dispatch => ({
  resetBoard: () => dispatch(resetBoard())
});

export default connect(
  null,
  mapDisptchToProps
)(ModalContainer);
