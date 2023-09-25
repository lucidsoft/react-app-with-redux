import { ADD_ITEM, DELETE_ITEM, SAVE_TO_LOCAL_STORAGE } from "../actionTypes/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

const saveToLocalStorage = () => {
  return {
    type: SAVE_TO_LOCAL_STORAGE,
  };
};

export { addItem, deleteItem, saveToLocalStorage };