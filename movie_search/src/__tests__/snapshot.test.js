import ReturnBtn from "../components/ReturnBtn/ReturnBtn";
import {Provider} from "react-redux";
import {store} from "../store/index";
import {render} from "enzyme";
import {List} from "../components/Tests/List";

describe('ReturnBtn test', () => {
    it('should render correctly', () => {
        const output = render(
            <Provider store={store}>
                <ReturnBtn url="mockUrl" />
            </Provider>
        );
        expect(output).toMatchSnapshot();
    });
});

describe('List test', () => {
    it('filled list snapshot', () => {
        const list = render(<List items={['lorem', 'lorem', 'lorem']} />);

        expect(list).toMatchSnapshot();
    })

    it('empty list snapshot', () => {
        const list = render(<List />);

        expect(list).toMatchSnapshot();
    })
})