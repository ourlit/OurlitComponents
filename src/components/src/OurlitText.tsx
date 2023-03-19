import React from 'react';
import { TypographyProps } from './types/types';
import { colors } from './colors';
import './styles/typography.css';

const TypographyBase = ({ text, color, textId }: TypographyProps & { textId: string }) => {

    // resolve color
    const textColor = (() => {
        switch (color) {
            case 'primaryBlue':
                return colors.darkTeal;
            case 'primaryRed':
                return colors.salmon;
            case 'black':
                return 'black';
            case 'white':
                return 'white';
            default:
                return 'black';
        }
    })();

    return (
        <span
          className="typography"
          id={textId}
          style={{ color: textColor }}
        >
            {text}
        </span>
    );
};

export const OurlitTitle = ({ text, color }: TypographyProps) => (
    <TypographyBase text={text} color={color} textId="title" />
);

export const OurlitSubtitle = ({ text, color }: TypographyProps) => (
    <TypographyBase text={text} color={color} textId="subtitle" />
);

export const OurlitHeader = ({ text, color }: TypographyProps) => (
    <TypographyBase text={text} color={color} textId="header" />
);

export const OurlitText = ({ text, color }: TypographyProps) => (
    <TypographyBase text={text} color={color} textId="text" />
);
