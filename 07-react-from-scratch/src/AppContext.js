import { createContext } from "react";

export const userStore = {
    count: 1
};

export const AppContext = createContext();

export const Action = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
export const userReducer = (state, action) => {
    switch (action.type) {
        case Action.INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case Action.DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            };
        }
        default: return state
    }
}