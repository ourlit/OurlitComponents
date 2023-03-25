import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OurlitButton from '../src/OurlitButton';

describe('OurlitButton', () => {
  
    it('Renders the button with the correct text', () => {
        render(<OurlitButton text="Click me!" />);
        const buttonText = screen.getByText('Click me!');
        expect(buttonText).toBeTruthy();
    });

    it('Calls onClick event handler when clicked', () => {
        const handleClick = jest.fn();
        render(<OurlitButton text="Click me!" onClick={handleClick} />);
        const button = screen.getByText("Click me!");
    
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('Renders the button with the correct size and variant', () => {
        const { rerender } = render(
          <OurlitButton
            text="Medium Button"
            size="medium"
            variant="contained" 
          />
        );
        let button = screen.getByText("Medium Button");
        const mediumButtonStyles = getComputedStyle(button);
        expect(mediumButtonStyles.width).toBe('200px');
        expect(mediumButtonStyles.height).toBe('40px');
    
        rerender(<OurlitButton text="Large Button" size="large" variant="outlined" />);
        button = screen.getByText("Large Button");
        const largeButtonStyles = getComputedStyle(button);
        expect(largeButtonStyles.width).toBe('300px');
        expect(largeButtonStyles.height).toBe('50px');
    });

    it('Renders the button with the correct color', () => {
        const { rerender } = render(
          <OurlitButton
            text="Primary Blue"
            color="primaryBlue"
            variant="contained"
          />
        );
        let button = screen.getByText("Primary Blue");
        const primaryBlueStyles = getComputedStyle(button);

        expect(primaryBlueStyles.backgroundColor).toBe('rgb(1, 189, 196)');
        expect(primaryBlueStyles.color).toBe('white');
    
        rerender(<OurlitButton text="Primary Red" color="primaryRed" variant="outlined" />);
        button = screen.getByText("Primary Red");
        const primaryRedStyles = getComputedStyle(button);
        
        expect(primaryRedStyles.borderColor).toBe('#db293c');
        expect(primaryRedStyles.color).toBe('rgb(219, 41, 60)');
    });
});
