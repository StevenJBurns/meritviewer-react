import React from 'react';
import ReactDOM from 'react-dom';
/* import * as serviceWorker from './serviceWorker'; */
import App from './app/App';
import { AppHeader } from './app/AppHeader/AppHeader';
import { AppFooter } from './app/AppFooter/AppFooter'

import './index.css';

ReactDOM.render(
  <App>
    <AppHeader />
    <main />
    <AppFooter />
  </App>,
  document.getElementById('react-root')
);

/* serviceWorker.unregister(); */
