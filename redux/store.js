import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
// import { createStore } from "redux";

// const reducerFn = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case "INC":
//       return { counter: state.counter + 1 };
//     case "DEC":
//       return { counter: state.counter - 1 };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducerFn);

// export default store;
