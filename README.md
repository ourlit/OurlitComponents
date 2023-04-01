# Ourlit's Component Library

## Components at a glance:
- OurlitButton
- OurlitTitle, OurlitSubtitle, OurlitHeader, and OurlitText
- OurlitModal
- OurlitIcon
- VerticalStack, HorizontalStack
- OurlitTextInput, OurlitMessageInput
- OurlitImageContainer

### Buttons

OurlitButton is a basic button component with the following customization options as props:
- `text`: The text you want displayed in the button
- `color` (optional): 'primaryBlue' or 'primaryRed' [default 'primaryRed']
- `size` (optional): 'small', 'medium', or 'large' [default 'medium']
- `variant` (optional): 'text', 'contained', or 'outlined' [default 'contained']
- `onClick` (optional): callback of type `() => void`

Example:

```
const MyButton = <OurlitButton text="A Button" onClick={() => console.log('Clicked')} />
```

### Text

Text options are listed in "components at a glance." The typography props are `text` and `color` (optional).
The color options are 'primaryBlue', 'primaryRed', 'black', 'white'.

Example:

```
const MyTitle = <OurlitTitle text="Title" color="white" />
```

### Modal
Modal component for displaying a modal on the screen. Consists of a button and popup content. The props are
exactly the same as those of the OurlitButton except `modalSize` (optional) which takes 'small', 'medium', and 'large'
`content` which takes a React element with the content you want contained in the modal.

Example:

```
const MyModal = <OurlitModal text="Open Modal" size="small" modalSize="large" content={<OurlitTitle text="The modal content">} />
```

### Icons
Icon component letting you easily include common icons in the site. This is the type declaration for the props:

```
export type OurlitIconProps = {
    size?: 'small' | 'medium' | 'large' | string;
    type: (
        'home' | 'menu' | 'search' | 'account' | 'settings' | 'add' |
        'edit' | 'delete' | 'check' | 'close' | 'refresh' | 'star' | 
        'notifications' | 'send'
    );
};
```

You can use any of the strings included to define which icon you want displayed. The size prop takes the predefined
sizes, or you can give is a font size as a string (i.e. "24", "32", etc.)

### Stacks for easy layout

`VerticalStack` and `HorizontalStack`. Use these as positional elements as containers for contents that already have flexbox-type positioning done for you. Further, you can edit any of the following props as well:

```
export type StackProps = {
    spacing?: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    divider?: boolean;
    style?: React.CSSProperties;
    children: React.ReactElement | React.ReactElement[];
};
```

### Text input

This includes `OurlitTextInput` and `OurlitMessageInput`. They're very similar components, except the message input component is formatted more like a traditional message view. Here are the type props for it:

```
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
```

These apply to both components.

### Image container

This is the `OurlitImageContainer` component. This is intended to be a convenient container for images. For example, this could be used to diplay the cover photo of a book. Here are its props:

```
export type ImageContainerProps = {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
};
```

