import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import UserList from './UserList';

describe("<UserList/>", () => {

    let mockFetch;
    beforeEach(() => {
        mockFetch = jest.fn();
        global.fetch = mockFetch;
    });

    afterEach(()=>{
        cleanup();
        mockFetch.mockReset();
    });

    test('<UserList/> should be emtpy initially', () => {
        const component = TestRenderer.create(<UserList />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    const fakeUserListJson = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }];

    test('<UserList/> should load users upon [Refresh] button click', async () => {
        mockFetch.mockReturnValue(Promise.resolve({
            json: () => Promise.resolve(fakeUserListJson)
        }));
        const { getByTestId } = render(<UserList />);
        fireEvent.click(getByTestId('btnRefresh'));
        await waitFor(() => {
            expect(getByTestId('userListView')).toBeInTheDocument()
        });
    });
});