import { types } from "../actions/ActionTypes";
import { getCompletedLinesCombineIndex } from "../utils/getCompletedLinesCombineIndex";

const initBingoBoard = size => {
  // return [...Array(25)].map(() => ({ number: undefined, picked: false }));
  return Array(25).fill({ number: undefined, isPicked: false });
};

const initialState = {
  firstBoard: initBingoBoard(),
  secondBoard: initBingoBoard(),
  firstBingoCompletedLines: [],
  secondBingoCompletedLines: [],
  isStarted: false,
  turn: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_GAME:
      const newFirstBoard = action.firstBoard.map(number => ({
        number,
        isPicked: false
      }));
      const newSecondBoard = action.secondBoard.map(number => ({
        number,
        isPicked: false
      }));

      return {
        ...state,
        firstBoard: newFirstBoard,
        secondBoard: newSecondBoard,
        firstBingoCompletedLines: [],
        secondBingoCompletedLines: [],
        isStarted: true,
        turn: 1
      };

    case types.CLICK_CELL:
      const firstIndex = state.firstBoard.findIndex(
        ({ number }) => number === action.number
      );
      const secondIndex = state.secondBoard.findIndex(
        ({ number }) => number === action.number
      );

      const firstBingoCompletedLinesCombineIndex = getCompletedLinesCombineIndex(
        state.firstBoard,
        firstIndex
      );
      const secondBingoCompletedLinesCombineIndex = getCompletedLinesCombineIndex(
        state.secondBoard,
        secondIndex
      );

      return {
        ...state,
        firstBoard: [
          ...state.firstBoard.slice(0, firstIndex),
          { number: state.firstBoard[firstIndex].number, isPicked: true },
          ...state.firstBoard.slice(firstIndex + 1)
        ],
        secondBoard: [
          ...state.secondBoard.slice(0, secondIndex),
          { number: state.secondBoard[secondIndex].number, isPicked: true },
          ...state.secondBoard.slice(secondIndex + 1)
        ],
        firstBingoCompletedLines: [
          ...state.firstBingoCompletedLines,
          ...firstBingoCompletedLinesCombineIndex
        ],
        secondBingoCompletedLines: [
          ...state.secondBingoCompletedLines,
          ...secondBingoCompletedLinesCombineIndex
        ],
        turn: action.turn === 1 ? 2 : 1
      };
    case types.RESET_BOARD:
      return initialState;
    default:
      return state;
  }
}
