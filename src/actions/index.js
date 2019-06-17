import { bingoTypes, modalTypes } from "./ActionTypes";

export const settingActions = {
  setGame: (firstBoard, secondBoard) => ({
    type: bingoTypes.SET_GAME,
    firstBoard,
    secondBoard
  }),
  resetBoard: () => ({
    type: bingoTypes.RESET_BOARD
  })
};

export const playingActions = {
  clickCell: (number, turn) => ({
    type: bingoTypes.CLICK_CELL,
    number,
    turn
  })
};

export const modalActions = {
  setModal: modalType => ({ type: modalTypes.SET_MODAL, modalType }),
  closeModal: () => ({ type: modalTypes.CLOSE_MODAL })
};
