import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { createBrowserHistory } from 'history';

import App from './App';

import './styles/global.scss';

const browserHistory = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={browserHistory}>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
