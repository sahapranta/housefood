import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";

// Note: this API requires redux@>=3.1.0
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );