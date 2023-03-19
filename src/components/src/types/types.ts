export type OurlitButtonSizes = 'small' | 'medium' | 'large';

export type OurlitButtonProps = {
    text: string;
    color?: 'primaryBlue' | 'primaryRed';
    size?: OurlitButtonSizes;
    variant?: 'text' | 'contained' | 'outlined';
    onClick?: () => void;
};
