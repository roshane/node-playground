import * as React from 'react';

export interface RevenueInput {
    amount: number,
    name?: string
}

const onClickTitle = (e: any) => {
    console.log('title clicked ', e);
    calculateRevenue({ amount: 1000 });
}

const calculateRevenue = (input: RevenueInput) => {
    console.log('calculating the revenue');
}

const App = () => {
    return (
        <div>
            <p onClick={onClickTitle}>This is the name of the element I was referring to</p>
        </div>
    );
}

export default App;