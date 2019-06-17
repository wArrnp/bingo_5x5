import { modalTypes } from "../actions/ActionTypes";

const initialState = {
  modalType: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case modalTypes.SET_MODAL:
      return {
        ...state,
        modalType: action.modalType
      };
    case modalTypes.CLOSE_MODAL:
      return {
        ...state,
        modalType: ""
      };
    default:
      return state;
  }
}
