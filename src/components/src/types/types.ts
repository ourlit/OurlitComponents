import React from 'react';

export type OurlitButtonSizes = 'small' | 'medium' | 'large';

export type OurlitButtonProps = {
    text: string;
    color?: 'primaryBlue' | 'primaryRed';
    size?: OurlitButtonSizes;
    variant?: 'text' | 'contained' | 'outlined';
    onClick?: () => void;
};

export type TypographyProps = {
    text: string;
    color?: 'primaryBlue' | 'primaryRed' | 'black' | 'white';
};

export type ModalFadeProps = {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
};

export type OurlitModalProps = OurlitButtonProps &{
    modalSize?: 'small' | 'medium' | 'large';
    content: React.ReactElement;
};
