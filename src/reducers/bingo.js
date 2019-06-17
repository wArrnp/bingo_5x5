import { types } from "../actions/ActionTypes";
import { checkBingo } from "../utils/checkBingo";

const initBingo = size => {
  return [...Array(25)].map(data => ({ number: data, picked: false }));
};

const initialState = {
  fstBoard: initBingo(),
  sndBoard: initBingo(),
  fstBingoList: [],
  sndBingoList: [],
  started: false,
  turn: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_GAME:
      const newFstBoard = action.fstBoard.map(number => ({
        number,
        picked: false
      }));
      const newSndBoard = action.sndBoard.map(number => ({
        number,
        picked: false
      }));

      return {
        ...state,
        fstBoard: newFstBoard,
        sndBoard: newSndBoard,
        fstBingoList: [],
        sndBingoList: [],
        started: true,
        turn: 1
      };

    case types.CLICK_CELL:
      const fstBoard = [...state.fstBoard];
      const sndBoard = [...state.sndBoard];
      const fstIndex = fstBoard.findIndex(
        item => item.number === action.number
      );
      const sndIndex = sndBoard.findIndex(
        item => item.number === action.number
      );
      fstBoard[fstIndex].picked = true;
      sndBoard[sndIndex].picked = true;
      const fstBingoList = checkBingo(fstBoard, fstIndex);
      const sndBingoList = checkBingo(sndBoard, sndIndex);

      return {
        ...state,
        fstBoard,
        sndBoard,
        fstBingoList: [...state.fstBingoList, ...fstBingoList],
        sndBingoList: [...state.sndBingoList, ...sndBingoList],
        turn: action.turn === 1 ? 2 : 1
      };
    case types.RESET_BOARD:
      return {
        fstBoard: initBingo(),
        sndBoard: initBingo(),
        fstBingoList: [],
        sndBingoList: [],
        started: false,
        turn: -1
      };
    default:
      return state;
  }
}
