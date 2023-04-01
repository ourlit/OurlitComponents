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

export type OurlitModalProps = OurlitButtonProps & {
    modalSize?: 'small' | 'medium' | 'large';
    content: React.ReactElement;
};

export type OurlitIconProps = {
    size?: 'small' | 'medium' | 'large' | string;
    type: (
        'home' | 'menu' | 'search' | 'account' | 'settings' | 'add' |
        'edit' | 'delete' | 'check' | 'close' | 'refresh' | 'star' | 
        'notifications' | 'send'
    );
};

export type StackProps = {
    spacing?: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    divider?: boolean;
    style?: React.CSSProperties;
    children: React.ReactElement | React.ReactElement[];
};

export type TextInputProps = {
    label?: string;
    value?: string;
    variant?: 'standard' | 'filled' | 'outlined';
    onChange?: (event: string) => void;
    style?: React.CSSProperties;
    rows?: number;
    error?: boolean;
    helperText?: string;
    multiline?: boolean;
};

export type ImageContainerProps = {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
};
