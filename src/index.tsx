import {
  OurlitButton,
  OurlitHeader,
  OurlitIcon,
  OurlitSubtitle,
  OurlitText,
  OurlitTitle,
  OurlitTextInput,
  OurlitMessageInput,
  HorizontalStack,
  VerticalStack,
} from './components';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [text, setText] = useState('');

  const setTextHelper = (newText: string) => {
    console.log('here', newText);
    setText(newText);
  };

  return (
    <>
      <OurlitButton
        text="Sam"
        color="primaryBlue"
        size="medium"
        variant="contained"
      />
      <VerticalStack style={{ width: 1000 }}>
        <OurlitTitle text="Sam" color="primaryRed" />
        <OurlitSubtitle text="Sam" color="primaryRed" />
        <HorizontalStack>
          <OurlitHeader text="Sam" color="primaryBlue" />
          <OurlitText text="Sam" color="primaryBlue" />
          <OurlitIcon size="100" type="account" />
        </HorizontalStack>
      </VerticalStack>
      {/* <OurlitTextInput
        label=""
        value=""
        variant="outlined"
        error
        helperText="Wrong!"
      /> */}
      <OurlitMessageInput
        label=""
        value={text}
        onChange={setTextHelper}
        variant="outlined"
      />
    </>
);
    };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);