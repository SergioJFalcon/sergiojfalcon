/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from '@kobalte/core';
import { Router } from '@solidjs/router';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const storageManager = cookieStorageManagerSSR(document.cookie);
render(() => 
  (
    <>
      <ColorModeScript storageType={storageManager.type} />
      <ColorModeProvider storageManager={storageManager}>
        <Router>
          <App />
        </Router>
      </ColorModeProvider>

    </>
  ), root!);
