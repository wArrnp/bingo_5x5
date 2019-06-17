import { types } from "./ActionTypes";

export const setGame = (fstBoard, sndBoard) => ({
  type: types.SET_GAME,
  fstBoard,
  sndBoard
});

export const clickCell = number => ({
  type: types.CLICK_CELL,
  number
});

export const toggleTurn = turn => ({
  type: types.TOGGLE_TURN,
  turn
});

export const resetBoard = () => ({
  type: types.RESET_BOARD
});
