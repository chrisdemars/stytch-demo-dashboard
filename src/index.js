import React from 'react';
import ReactDOM from 'react-dom/client';
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';
import App from './App';

import './index.css';

const stytch = new StytchUIClient(
  'public-token-test-49f607c3-8c98-4779-8592-16393e21855e'
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StytchProvider stytch={stytch}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StytchProvider>,
  document.getElementById('root')
);
