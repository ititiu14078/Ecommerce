import { SET_CATEGORY } from "../types";

const initialState = {
    categories: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
      case SET_CATEGORY: {
          return {
              categories: [...action.payload]
          }
      }
      default:
        return state;
    }
  }