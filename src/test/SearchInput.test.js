import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from '../components/SearchInput';

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
})