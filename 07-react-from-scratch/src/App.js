import { useReducer } from 'react';
import { userReducer, userStore } from './AppContext';
import Display from './Display';
import { AppContext } from './AppContext';


const App = () => {

    const userContext = useReducer(userReducer, userStore);

    return (
        <AppContext.Provider value={userContext}>
            <Display />
        </AppContext.Provider>
    );
}

export default App;