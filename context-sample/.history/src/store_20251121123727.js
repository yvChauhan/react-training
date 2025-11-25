import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

console.log(
  "Redux store has been configured with thunk middleware.",
  store.getState()
);
