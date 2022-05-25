import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.show);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch({ type: "SHOWnHIDE" });
    };
    const incrementHandler = () => {
        dispatch({ type: "INCREMENT" });
    };
    const decrementHandler = () => {
        dispatch({ type: "DECREMENT" });
    };
    const increaseHandler = () => {
        dispatch({ type: "INCREASE", payload: { data: 10 } });
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
