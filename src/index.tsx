import { OurlitButton } from './components';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <OurlitButton text="Sam" />
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);