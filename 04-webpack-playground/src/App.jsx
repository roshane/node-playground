import { useEffect, useReducer, useState } from 'react';

const ResourceType = {
    POSTS: 'posts',
    TODOS: 'todos',
    USERS: 'users',
    COMMENTS: 'comments'
};

const Actions = {
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED: 'failed'
}

const initialState = {
    resourceType: undefined,
    resources: [],
    isLoading: false
}

const baseUrl = 'https://jsonplaceholder.typicode.com'
const resourceTypeReducer = (state, action) => {
    console.log('state', state, 'action', action);
    switch (action.type) {
        case Actions.LOADING: {
            console.log('loading data')
            let { resourceType, resources } = action;
            return { isLoading: true, resourceType: resourceType, resources: resources }
        }
        case Actions.LOADED: {
            console.log('data loaded')
            let { resourceType, resources } = action;
            return { isLoading: false, resources: resources, resourceType: resourceType };
        }
        default: {
            console.log('default')
            return state;
        }

    }
}


const App = () => {
    const [validForm, setValidForm] = useState(false);
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(resourceTypeReducer, initialState);


    const handleBtnClick = (e) => {
        e.preventDefault();
        console.log(new Date().getTime(), 'button clicked');
    }

    const timeTakingTask = () => {
        startCalculating(() => {
            for (let i = 0; i < 10000000000; i++) { }
            console.info('long running task end');
            return true;
        })
    }

    const handleOnNameChange = e => {
        setName((prev) => {
            const current = e.target.value;
            console.log(`named changed from [${prev}] to [${current}]`);
            if (current && current.trim().length > 0) {
                setValidForm(true);
            } else {
                setValidForm(false);
            }
            return current;
        })
    }

    const onListItemClick = async (resource) => {
        dispatch({
            type: Actions.LOADING,
            resourceType: resource,
            resource: []
        });
        const url = `${baseUrl}/${ResourceType[resource]}`;
        const json = await fetch(url)
            .then(data => data.json())
            .catch(error => dispatch({
                type: Actions.FAILED,
                resourceType: resource,
                resources: []
            }));
        console.info('await json', json);
        dispatch({
            type: Actions.LOADED,
            resourceType: resource,
            resources: json
        });

    }

    const sampleContent = () => (
        <div className='container mx-auto'>
            <div className='bg-blue-200 text-center py-2 pb-5'>
                <h4 className={'font-medium italic text-6xl'}>Heading</h4>
            </div>
            <hr />
            <div className='bg-white bg-opacity-30 backdrop-blur-sm drop-shadow-md rounded-sm h-80'>
                {/* <UserList /> */}
                <form action='#'>
                    <div className='flex flex-row justify-start place-items-center'>
                        <span className={'underline italic m-1/3 ml-2'}>Input String:</span>
                        <input type="text" onChange={handleOnNameChange} value={name}
                            className={'p-2 rounded-md m-2 w-2/3 italic'} />
                    </div>
                    <button disabled={!validForm} onClick={handleBtnClick}
                        className="bg-indigo-500 p-2 my-2 mx-2 italic font-semibold text-white
                         rounded shadow-md hover:bg-red-600 hover:shadow-lg disabled:bg-gray-300 disabled:shadow-none">
                        submit
                    </button>
                </form>
            </div>
            <hr />
            <hr />
            <button onClick={timeTakingTask}
                className="bg-red-600 p-2 my-2 mx-2 italic font-semibold text-white rounded  hover:bg-red-700 hover:shadow-lg">
                {isPending ? 'Loading...' : 'Run Task'}
            </button>
            <div className='bg-black'>Footer</div>
        </div>
    );
    console.info('rendering component');
    return <main className='flex flex-col place-content-center'>

        <ul className='list-none flex flex-row bg-orange-400 p-4'>
            {
                Object.keys(ResourceType)
                    .map(k => <li
                        key={k}
                        onClick={() => onListItemClick(k)}
                        className='w-1/4 text-center bg-orange-300 p-2 py-2 mx-2 rounded-md text-xl uppercase italic font-semibold hover:bg-orange-500 hover:cursor-pointer'>
                        {ResourceType[k]}
                    </li>
                    )
            }
        </ul>
        <div className='h-4'></div>
        <div className='px-5'>
            {
                state.isLoading ? 'Loading...' : state.resources.map(resource => <div key={resource.id}>
                    {JSON.stringify(resource)}
                </div>
                )
            }
        </div>

    </main>
};

export default App;


// {/* <Home version={APP_VERSION}/> */}