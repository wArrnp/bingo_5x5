import { types } from "./ActionTypes";

export const settingActions = {
  setGame: (firstBoard, secondBoard) => ({
    type: types.SET_GAME,
    firstBoard,
    secondBoard
  }),
  resetBoard: () => ({
    type: types.RESET_BOARD
  })
};

export const playingActions = {
  clickCell: (number, turn) => ({
    type: types.CLICK_CELL,
    number,
    turn
  })
};
