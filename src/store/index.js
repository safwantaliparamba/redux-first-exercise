import { createStore } from "redux";

const initialState = {
    counter: 0,
    show: true,
};

const counterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            };
        case "SHOWnHIDE":
            return {
                ...state,
                show: !state.show,
            };
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + payload.data,
            };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;
