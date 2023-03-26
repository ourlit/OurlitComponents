import { OurlitButton, OurlitSubtitle, OurlitTitle, OurlitHeader, OurlitText, OurlitModal, OurlitIcon, VerticalStack, HorizontalStack } from './components';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
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
    </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);