import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todo";
// import todoReducer from "./reducers/todoReducer";
// import { compose, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   todoReducer,
//   composeEnchancer(applyMiddleware(thunk))
// );
// export default store;

// export default () => {
//   return configureStore({ reducer });
// };

const store = () => {
  return configureStore({ reducer });
};
export default store();