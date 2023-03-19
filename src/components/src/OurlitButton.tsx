import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import { colors } from './colors';
import { OurlitButtonProps } from './types/types';

const OurlitButton = ({ text, color, size, variant, onClick }: OurlitButtonProps) => {

    // resolve variant of the button
    const buttonVariant = variant ? variant : 'contained';

    // resolve size of the button
    const { buttonWidth, buttonHeight } = (() => {
      switch (size) {
        case 'small':
          return { buttonWidth: 100, buttonHeight: 30 };
        case 'medium':
          return { buttonWidth: 200, buttonHeight: 40 };
        case 'large':
          return { buttonWidth: 300, buttonHeight: 50 };
        default:
          return { buttonWidth: 200, buttonHeight: 40 };
      }
    })();
    
    // resolve color of the button
    const { textColor, backgroundColor, borderColor } = (() => {
      switch (color) {
        case 'primaryBlue':
          return {
            textColor: buttonVariant === 'contained' ? 'white' : colors.darkTeal,
            backgroundColor: buttonVariant === 'contained' ? colors.darkTeal : 'none',
            borderColor: buttonVariant === 'outlined' ? colors.darkTeal : 'none'
          }
        case 'primaryRed':
          return {
            textColor: buttonVariant === 'contained' ? 'white' : colors.salmon,
            backgroundColor: buttonVariant === 'contained' ? colors.salmon : 'none',
            borderColor: buttonVariant === 'outlined' ? colors.salmon : 'none'
          }
        default:
          return {
            textColor: buttonVariant === 'contained' ? 'white' : colors.salmon,
            backgroundColor: buttonVariant === 'contained' ? colors.salmon : 'none',
            borderColor: buttonVariant === 'outlined' ? colors.salmon : 'none'
          }
      }
    })();

    const StyledButton = styled(Button)<ButtonProps>(() => ({
      width: buttonWidth,
      height: buttonHeight,
      color: textColor,
      backgroundColor,
      borderColor
    }));

    return (
      <StyledButton
        variant={variant}
        onClick={onClick}
      >
        {text}
      </StyledButton>
    );
};

export default OurlitButton;
