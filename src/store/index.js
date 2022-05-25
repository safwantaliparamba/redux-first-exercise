import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    show: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        showHide(state) {
            state.show = !state.show;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterAction = counterSlice.actions;

export default store;
