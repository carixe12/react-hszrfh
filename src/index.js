import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './config/i18next-config';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
