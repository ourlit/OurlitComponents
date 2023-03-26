import { OurlitButton, OurlitSubtitle, OurlitTitle, OurlitHeader, OurlitText, OurlitModal, OurlitIcon } from './components';
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
      <OurlitTitle text="Sam" color="primaryRed" />
      <OurlitSubtitle text="Sam" color="primaryRed" />
      <OurlitHeader text="Sam" color="primaryBlue" />
      <OurlitText text="Sam" color="primaryBlue" />
      <OurlitIcon size="100" type="account" />
    </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);