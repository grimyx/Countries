import CreateLists from '../components/CreateLists'
import { render, screen } from '@testing-library/react'

const fakeData1 = new Array(10).fill(1);
const fakeData2 = new Array(20).fill(2);

const transformFn = (d) => {
    return (
        <p>{d}</p>
    )
}

describe('CreateLists', () => {
    test('should render 10 elements', () => {
        render(<CreateLists data={fakeData1} transformFn={transformFn} maxSize={10} />);
        expect(screen.getAllByText('1')).toHaveLength(10);
    });

    test('should render 20 p elements', () => {
        render(<CreateLists data={fakeData2} transformFn={transformFn} maxSize={20} />);
        expect(screen.getAllByText('2')).toHaveLength(20);
    });

    test('should return empty div', () => {
        render(<CreateLists data={fakeData2} transformFn={transformFn} maxSize={12} />);
        expect(screen.getByTestId('empty-container')).toBeEmptyDOMElement();
    })
})