import { types } from "./ActionTypes";

export const settingActions = {
  setGame: (fstBoard, sndBoard) => ({
    type: types.SET_GAME,
    fstBoard,
    sndBoard
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
