import { useContext } from "react";
import { AppContext, Action } from "./AppContext";

const Display = () => {
    const [state, dispatch] = useContext(AppContext);
    let { count } = state;
    const incrementCount = () => {
        console.log('state', state);
        dispatch({ type: Action.INCREMENT })
    }

    return (
        <div>
            <h3>current count: {count}</h3>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default Display;