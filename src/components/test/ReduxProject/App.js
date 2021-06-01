import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { DECREASE, INCREASE, RESET } from "./actions";
import reducer from "./reducers";
import { Provider } from "react-redux";

const defaultState = {
  count: 75,
  name: "john",
};

const store = createStore(reducer, defaultState);

store.dispatch({ type: RESET });
store.dispatch({ type: DECREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
// console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}
