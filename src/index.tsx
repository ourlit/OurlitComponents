import { OurlitButton, OurlitSubtitle, OurlitTitle, OurlitHeader, OurlitText, OurlitModal } from './components';
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
      <OurlitModal
        text="Open"
        color="primaryRed"
        size="medium"
        variant="outlined"
        content={
          <>
            <OurlitTitle text="Sam" color="primaryRed" />
            <OurlitModal
              text="Open"
              color="primaryRed"
              size="medium"
              variant="outlined"
              content={
                <>
                  <OurlitText text="Sam" color="primaryBlue" />
                </>
              }
            />
        </>
        }
      />
      </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);