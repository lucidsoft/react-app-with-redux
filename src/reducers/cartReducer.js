import { ADD_ITEM, DELETE_ITEM, SAVE_TO_LOCAL_STORAGE } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: Number(localStorage.getItem('state.numOfItems')) || 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };

    case SAVE_TO_LOCAL_STORAGE:
      localStorage.setItem('state.numOfItems', state.numOfItems);
      return state;

    default:
      return state;
  }
};

export { cartReducer };