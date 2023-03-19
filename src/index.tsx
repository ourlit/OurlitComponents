import { OurlitButton } from './components';
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
      <OurlitButton
        text="Sam"
        color="primaryBlue"
        size="large"
        variant="contained"
      />
      <OurlitButton
        text="Sam"
        color="primaryRed"
        size="small"
        variant="outlined"
      />
      <OurlitButton
        text="Sam"
        color="primaryRed"
        size="large"
        variant="text"
      />
    </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);