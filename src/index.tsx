import { createRoot } from 'react-dom/client';
/* import * as serviceWorker from './serviceWorker'; */
import { App } from './app/App';
import { AppMain } from './app/AppMain/AppMain';
import { AppHeader } from './app/AppHeader/AppHeader';
import { AppFooter } from './app/AppFooter/AppFooter';
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
