import {
  ADD_TO_CART,
  ADD_TO_DETAIL,
  CHECK_LOCALSTORAGE_CART,
  DELETE_ITEM_OF_CART,
  EDIT_DETAIL,
  UPDATE_ITEM_OF_CART,
} from "./clientContains";

const checkLocalStorageCart = (payload) => {
  return {
    type: CHECK_LOCALSTORAGE_CART,
    payload,
  };
};

const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

const updateItemOfCart = (payload) => {
  return {
    type: UPDATE_ITEM_OF_CART,
    payload,
  };
};

const deleteItemOfCart = (payload) => {
  return {
    type: DELETE_ITEM_OF_CART,
    payload,
  };
};

// detail

const addToDetail = (payload) => {
  return {
    type: ADD_TO_DETAIL,
    payload,
  };
};

const editDetail = (payload) => {
  return {
    type: EDIT_DETAIL,
    payload,
  };
};

export {
  addToCart,
  addToDetail,
  editDetail,
  updateItemOfCart,
  deleteItemOfCart,
  checkLocalStorageCart,
};
