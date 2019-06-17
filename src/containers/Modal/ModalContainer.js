import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions, settingActions } from "../../actions";

import { Modal } from "../../components";

class ModalConatiner extends Component {
  onReset = () => {
    const { ModalActions, SettingActions } = this.props;
    ModalActions.closeModal();
    SettingActions.resetBoard();
  };

  onClose = () => {
    const { ModalActions } = this.props;
    ModalActions.closeModal();
  };

  render() {
    const { modalType } = this.props;
    if (modalType === "draw")
      return <Modal comment="무승부입니다." onClick={this.onReset} />;
    else if (modalType === "1p")
      return (
        <Modal comment="1P가 빙고를 완성했습니다." onClick={this.onReset} />
      );
    else if (modalType === "2p")
      return (
        <Modal comment="2P가 빙고를 완성했습니다." onClick={this.onReset} />
      );
    else if (modalType === "no-turn")
      return <Modal comment="잘못된 차례입니다." onClick={this.onClose} />;
    return "";
  }
}

const mapStateToProps = state => ({
  modalType: state.modal.modalType
});

const mapDispatchToProps = dispatch => ({
  ModalActions: bindActionCreators(modalActions, dispatch),
  SettingActions: bindActionCreators(settingActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalConatiner);
