import { products } from "../../dataTest";
import {
  ADD_TO_CART,
  ADD_TO_DETAIL,
  CHECK_LOCALSTORAGE_CART,
  DELETE_ITEM_OF_CART,
  EDIT_DETAIL,
  INIT_USER,
  UPDATE_ITEM_OF_CART,
} from "./clientContains";

export const clientReducer = (state, action) => {
  switch (action.type) {
    // user
    case INIT_USER:
      console.log("Init User", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    // cart
    case CHECK_LOCALSTORAGE_CART:
      console.log("checking local storage", action.payload);

      return {
        ...state,
        store: {
          ...state.store,
          buy: action.payload,
        },
      };

    case ADD_TO_CART:
      console.log("adding to cart", action.payload);

      const cart = {
        ...state.store,
        buy: [...state.store.buy, action.payload],
      };
      console.log("cart", cart.buy);

      // adding storage

      window.localStorage.setItem("cart", JSON.stringify(cart.buy));

      return {
        ...state,
        store: {
          ...state.store,
          buy: [...state.store.buy, action.payload],
        },
      };

    case UPDATE_ITEM_OF_CART:
      const oldBuy = state.store.buy;

      const newBuy = oldBuy.map((item) =>
        item.id === action.payload.id ? (item = action.payload) : item
      );

      console.log("update item of cart", newBuy);

      localStorage.setItem("cart", JSON.stringify(newBuy));

      return {
        ...state,
        store: {
          ...state.store,
          buy: newBuy,
        },
      };

    case DELETE_ITEM_OF_CART:
      const buyArr = state.store.buy;
      const updateBuy = buyArr.filter((item) => item.id !== action.payload.id);

      console.log("delete item of cart", updateBuy);

      localStorage.setItem("cart", JSON.stringify(updateBuy));

      return {
        ...state,
        store: {
          ...state.store,
          buy: updateBuy,
        },
      };

    // detail

    case ADD_TO_DETAIL:
      console.log("addToDetail", action.payload);
      const infoProduct = products.filter(
        (item) => item.id === parseInt(action.payload.id)
      );

      const customDetail = {
        ...infoProduct[0],
        originPrice: infoProduct[0].price,
        message: "",
        colorSelect: "",
        quality: 1,
      };

      return {
        ...state,
        store: {
          ...state.store,
          detail: customDetail,
        },
      };

    case EDIT_DETAIL:
      return {
        ...state,
        store: {
          ...state.store,
          detail: action.payload,
        },
      };
    default:
      return { ...state };
  }
};
