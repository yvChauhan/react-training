import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk(api)));
export default store;

console.log(
  "Redux store has been configured with thunk middleware.",
  store.getState()
);
