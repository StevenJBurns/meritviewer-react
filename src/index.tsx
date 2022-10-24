import React from 'react';
import { createRoot } from 'react-dom/client';
/* import * as serviceWorker from './serviceWorker'; */
import { App } from './components/app/App';
import { AppMain } from './components/app/AppMain/AppMain';
import { AppHeader } from './components/app/AppHeader/AppHeader';
import { AppFooter } from './components/app/AppFooter/AppFooter';
import './index.scss';

import { EMPIRES } from './constants/EMPIRES';
console.log(EMPIRES);

const root = createRoot(document.getElementById('react-root')!);

root.render(
  <App>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </App>
);

/* serviceWorker.unregister(); */
