import { SET_CURRENT_USER } from "../Actions/Types";

const initialState = {
    isAuthenticated: false,
    userDetails: {}
};

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          isAuthenticated: !isEmpty(action.user),
          userDetails: action.user
        };
      default:
        return state;
    }
  };
  