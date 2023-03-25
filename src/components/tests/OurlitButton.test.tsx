import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OurlitButton from '../src/OurlitButton';

describe('OurlitButton', () => {
  
    test('renders the button with the correct text', () => {
        render(<OurlitButton text="Click me!" />);
        const buttonText = screen.getByText(/Click me!/i);
        expect(buttonText).toBeTruthy();
    });

});
