import TestRenderer from 'react-test-renderer';
import Title from './Title';


describe("<Title/>", () => {

    beforeEach(() => {
        //TODO setup
    });

    test('<Title/> should render default when not provided any title', () => {
        const defaultTitle = 'Title of the page';
        const component = TestRenderer.create(<Title />);
        const instance = component.root;
        expect(instance.props.title).toBe(undefined);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('<Title/> should render the correct text passed as props', () => {
        const currentTitle = 'Hello 123';
        const component = TestRenderer.create(<Title title={currentTitle} />);
        const instance = component.root;
        expect(instance.props.title).toBe(currentTitle);
        expect(component.toJSON()).toMatchSnapshot();
    });
});


