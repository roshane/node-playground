import { useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users'

const UserList = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [loadUserTimestamp, setLoadUserTimestamp] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(json => setUserList(json))
            .then(() => setLoading(false));
    }, [loadUserTimestamp]);


    return (
        <>
            <button
                className='rounded bg-orange-300 px-2 py-2 text-black hover:bg-orange-400'
                onClick={() => setLoadUserTimestamp(new Date().getTime())}
                data-testid='btnRefresh'>
                Refresh
            </button>
            {
                isLoading ? <p data-testid='loadingMsg'>Loading...</p> : <div data-testid='userListView'>
                    {
                        userList.map(user => (
                            <div key={user.id}>
                                <pre>
                                    {JSON.stringify(user, null, 2)}
                                </pre>
                                <hr />
                            </div>
                        ))
                    }
                </div>
            }
        </>
    );

}

export default UserList;