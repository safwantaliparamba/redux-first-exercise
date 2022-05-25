import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterAction } from "../store/index";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.show);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterAction.showHide());
    };
    const incrementHandler = () => {
        dispatch(counterAction.increment());
    };
    const decrementHandler = () => {
        dispatch(counterAction.decrement());
    };
    const increaseHandler = () => {
        dispatch(counterAction.increase(5));
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
