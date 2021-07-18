import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from '../components/SearchInput';
import userEvent from '@testing-library/user-event';

describe('SearchInput', () => {
    test('is rendered', () => {
        render(<SearchInput />)

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('default placeholder', () => {
        render(<SearchInput />);
        expect(screen.getByRole('textbox')).toHaveProperty("placeholder", "");
    })

    test('user defined placeholder', () => {
        render(<SearchInput placeholderText="Sasa"/>);
        expect(screen.getByRole('textbox')).toHaveProperty('placeholder', 'Sasa')
    })

    test('input value changes', () => {
        let tempVal = "Sasa"
        render(<SearchInput value={tempVal} />);

        expect(screen.getByRole('textbox')).toHaveAttribute("value", 'Sasa');
    })

    test('handler function changes value', async () => {
        let tmpVale = "";
        const handleFn = (e) => {
            tmpVale = tmpVale + e.target.value;
        }

        render(<SearchInput value={tmpVale} onChange={handleFn} />)

        await userEvent.type(screen.getByRole('textbox'), "Hello");

        expect(tmpVale).toBe("Hello");
        console.log(tmpVale)
    })
})