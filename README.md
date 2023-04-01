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

