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
    console.log('calculating the revenue ');
}

const App = () => {
    const [resource, setResourceType] = React.useState<string>();
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {
        if (resource) {
            setLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/${resource}`)
                .then(data => data.json())
                .then(json => setData(json))
                .then(ignore => setLoading(false));
        }
    }, [resource]);

    return (
        <div>
            <div>
                <button onClick={() => setResourceType('posts')}>posts</button>
                <button onClick={() => setResourceType('comments')}>comments</button>
                <button onClick={() => setResourceType('todos')}>todos</button>
            </div>
            <p> {resource}</p> {isLoading && <h2>Loading...</h2>}

            <hr />
            {
                !isLoading && data.map(json => <pre>{JSON.stringify(json)}</pre>)
            }


            <p onClick={onClickTitle}>This is the name of the element I was referring to</p>
        </div>
    );
}

export default App;