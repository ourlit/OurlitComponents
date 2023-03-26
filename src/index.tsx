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
  OurlitImageContainer
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
      <OurlitImageContainer
        src="https://hips.hearstapps.com/hmg-prod/images/mathieu-van-der-poel-01-2021-benicasim-2-1638218017.jpeg?crop=1.00xw:0.751xh;0,0.224xh&resize=1200:*"
        alt="Mathieu van der Poel"
        width="100px"
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