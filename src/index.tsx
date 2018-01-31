import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'bulma/css/bulma.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
