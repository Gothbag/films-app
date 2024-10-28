import { StrictMode } from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from 'jotai';
import { createRoot } from 'react-dom/client';

import './index.scss';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
