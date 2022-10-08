import { useContext, useState } from "react";
import { Action, AppContext } from "./AppContext";
import LoginForm from './components/LoginForm';

const Display = () => {
    const [state, dispatch] = useContext(AppContext);
    let [otherCount,setOtherCount]= useState(0);
    let { count } = state;
    const incrementCount = () => {
        console.log('state', state);
        dispatch({ type: Action.INCREMENT })
    }

    return (
        <div>
            <h3>current count: {count}</h3>
            <pre>Other count: {otherCount}</pre>
            <button onClick={()=>{
                incrementCount();
                setOtherCount(otherCount+1);
            }}>Increment</button>
            <hr />
            {/* <LoginForm/> */}
        </div>
    );
};

export default Display;