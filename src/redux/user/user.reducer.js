import { UserActionTypes } from "./user.types";

const INIT_STATE = {
  currentUser: null,
};

//Function that gets a state object and an action, if case for action type matches case,
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
